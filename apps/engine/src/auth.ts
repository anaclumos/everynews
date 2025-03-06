import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, apiKey, openAPI, organization } from 'better-auth/plugins'
import { passkey } from 'better-auth/plugins/passkey'
import { db } from './db'
import { sendVerificationEmail } from './email'

export const auth = betterAuth({
  api: {
    baseURL: 'http://localhost:7777',
  },
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
  },
  emailVerification: {
    sendVerificationEmail: async ({ user, url, token }, request) => {
      await sendVerificationEmail({
        to: user.email,
        subject: 'Verify your email address',
        url,
      })
    },
  },
  appName: 'everynews-engine',
  plugins: [
    apiKey(),
    admin(),
    organization(),
    passkey(),
    openAPI({
      disableDefaultReference: true,
    }),
  ],
})
