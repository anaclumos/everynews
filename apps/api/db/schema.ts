import {
  boolean,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core'
import { ulid } from 'ulid'

export const baseSchema = {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => ulid()),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
  deletedAt: timestamp('deleted_at'),
}

export const users = pgTable('users', {
  ...baseSchema,
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  image: text('image'),
  role: text('role'),
  banned: boolean('banned'),
  banReason: text('ban_reason'),
  banExpires: timestamp('ban_expires'),
})

export const sessions = pgTable('sessions', {
  ...baseSchema,
  expiresAt: timestamp('expires_at').notNull(),
  token: text('token').notNull().unique(),
  ipAddress: text('ip_address'),
  userAgent: text('user_agent'),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  impersonatedBy: text('impersonated_by'),
  activeOrganizationId: text('active_organization_id'),
})

export const accounts = pgTable('accounts', {
  ...baseSchema,
  accountId: text('account_id').notNull(),
  providerId: text('provider_id').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  accessToken: text('access_token'),
  refreshToken: text('refresh_token'),
  idToken: text('id_token'),
  accessTokenExpiresAt: timestamp('access_token_expires_at'),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  password: text('password'),
})

export const verifications = pgTable('verifications', {
  ...baseSchema,
  identifier: text('identifier').notNull(),
  value: text('value').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
})

export const apikeys = pgTable('apikeys', {
  ...baseSchema,
  name: text('name'),
  start: text('start'),
  prefix: text('prefix'),
  key: text('key').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  refillInterval: integer('refill_interval'),
  refillAmount: integer('refill_amount'),
  lastRefillAt: timestamp('last_refill_at'),
  enabled: boolean('enabled'),
  rateLimitEnabled: boolean('rate_limit_enabled'),
  rateLimitTimeWindow: integer('rate_limit_time_window'),
  rateLimitMax: integer('rate_limit_max'),
  requestCount: integer('request_count'),
  remaining: integer('remaining'),
  lastRequest: timestamp('last_request'),
  expiresAt: timestamp('expires_at'),
  permissions: text('permissions'),
  metadata: text('metadata'),
})

export const organizations = pgTable('organizations', {
  ...baseSchema,
  name: text('name').notNull(),
  slug: text('slug').unique(),
  logo: text('logo'),
  metadata: text('metadata'),
})

export const members = pgTable('members', {
  ...baseSchema,
  organizationId: text('organization_id')
    .notNull()
    .references(() => organizations.id, { onDelete: 'cascade' }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  role: text('role').notNull(),
})

export const invitations = pgTable('invitations', {
  ...baseSchema,
  organizationId: text('organization_id')
    .notNull()
    .references(() => organizations.id, { onDelete: 'cascade' }),
  email: text('email').notNull(),
  role: text('role'),
  status: text('status').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  inviterId: text('inviter_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
})

export const passkeys = pgTable('passkeys', {
  ...baseSchema,
  name: text('name'),
  publicKey: text('public_key').notNull(),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  credentialID: text('credential_i_d').notNull(),
  counter: integer('counter').notNull(),
  deviceType: text('device_type').notNull(),
  backedUp: boolean('backed_up').notNull(),
  transports: text('transports'),
})

/**
 * MAGAZINES
 * - Created by a user within an organization.
 * - Has a cron-based schedule (string) + nextRunAt for easy querying.
 * - isPublic determines whether the magazine is visible beyond the org.
 */
export const magazines = pgTable(
  'magazines',
  {
    ...baseSchema,
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    createdBy: text('created_by')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    title: text('title').notNull(),
    description: text('description'),
    schedule: text('schedule').notNull(), // e.g. cron expression
    nextRunAt: timestamp('next_run_at'), // used to find what's due next
    isPublic: boolean('is_public').notNull().default(false),
  },
  (table) => [index('magazines_next_run_at_idx').on(table.nextRunAt)],
)

/**
 * SECTIONS
 * - Belongs to a magazine (one-to-many).
 * - Stores configuration in a text field (JSON as string) or you can switch to JSONB if needed.
 */
export const sections = pgTable(
  'sections',
  {
    ...baseSchema,
    magazineId: text('magazine_id')
      .notNull()
      .references(() => magazines.id, { onDelete: 'cascade' }),
    metadata: text('metadata'), // typically stores JSON for crawling strategy, summarization, etc.
  },
  (table) => [index('sections_magazine_idx').on(table.magazineId)],
)

/**
 * SUBSCRIPTIONS
 * - Many-to-many link between users and magazines.
 * - The creator is auto-subscribed, but other users can subscribe if allowed.
 */
export const subscriptions = pgTable(
  'subscriptions',
  {
    ...baseSchema,
    userId: text('user_id')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    magazineId: text('magazine_id')
      .notNull()
      .references(() => magazines.id, { onDelete: 'cascade' }),
  },
  (table) => [
    uniqueIndex('subscriptions_user_magazine_unique').on(
      table.userId,
      table.magazineId,
    ),
  ],
)

/**
 * SUBSCRIPTION_CHANNELS
 * - Each subscription can have multiple notification channels (e.g. email, phone, Slack).
 * - channelAddress can store an email address, phone number, webhook URL, etc.
 */
export const subscriptionChannels = pgTable('subscription_channels', {
  ...baseSchema,
  subscriptionId: text('subscription_id')
    .notNull()
    .references(() => subscriptions.id, { onDelete: 'cascade' }),
  channelType: text('channel_type').notNull(), // 'email', 'SMS', 'Slack', etc.
  channelAddress: text('channel_address'), // actual address/endpoint
})
