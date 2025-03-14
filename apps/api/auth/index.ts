import { db } from '@everynews/api/db'
import { sendMagicLink } from '@everynews/api/email'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import {
  admin,
  apiKey,
  magicLink,
  openAPI,
  organization,
} from 'better-auth/plugins'
import { passkey } from 'better-auth/plugins/passkey'

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
