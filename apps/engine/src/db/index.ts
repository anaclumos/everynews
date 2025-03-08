import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './schema'

const db = drizzle(
  new Pool({
    connectionString: process.env.DATABASE_URL,
  }),
  { schema },
)

export { db }
