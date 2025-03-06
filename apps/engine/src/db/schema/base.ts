import { text, timestamp } from 'drizzle-orm/pg-core'
import { ulid } from 'ulid'

export const baseSchema = {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => ulid()),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
}
