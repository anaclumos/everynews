import { sendMagicLink } from '@everynews/api/email'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, apiKey, openAPI, organization } from 'better-auth/plugins'
import { magicLink } from 'better-auth/plugins'
import { passkey } from 'better-auth/plugins/passkey'
import { db } from '../db'

if (!process.env.BETTER_AUTH_SECRET) {
  throw new Error('BETTER_AUTH_SECRET is not defined')
}

export const auth = betterAuth({
  appName: '@everynews/api/auth',
  secret: process.env.BETTER_AUTH_SECRET,
  database: drizzleAdapter(db, {
    provider: 'pg',
    usePlural: true,
  }),
  plugins: [
    apiKey(),
    admin(),
    organization(),
    passkey(),
    magicLink({
      sendMagicLink,
    }),
    openAPI({
      disableDefaultReference: true,
    }),
  ],
})
