import { sendVerificationEmail } from '@everynews/api/email'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, apiKey, openAPI, organization } from 'better-auth/plugins'
import { passkey } from 'better-auth/plugins/passkey'
import { db } from '../db'

if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error('BETTER_AUTH_SECRET is not defined')
}

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
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
