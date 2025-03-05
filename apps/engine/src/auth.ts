import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { admin, apiKey, organization } from 'better-auth/plugins'
import { passkey } from 'better-auth/plugins/passkey'
import { db } from './db'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
  }),
  emailAndPassword: {
    enabled: true,
  },
  appName: 'everynews-engine',
  plugins: [apiKey(), admin(), organization(), passkey()],
})
