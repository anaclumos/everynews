# EveryNews Engine

Backend engine for EveryNews application.

## Getting Started

1. Copy `.env.example` to `.env` and update the values:
   ```bash
   cp .env.example .env
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Setup the database:
   ```bash
   # Generate migration files
   bun run db:generate
   
   # Apply migrations to your database
   bun run db:migrate
   
   # OR use push for development (not recommended for production)
   bun run db:push
   ```

4. Start the development server:
   ```bash
   bun run dev
   ```

## Database Management

- `bun run db:generate` - Generate migration files based on your schema changes
- `bun run db:migrate` - Run migrations to update your database
- `bun run db:push` - Push schema changes directly to the database (development only)
- `bun run db:studio` - Launch Drizzle Studio to view and manage your data
- `bun run db:check` - Check for schema drift between your code and database

## When making changes to Better Auth

```bash
bun x @better-auth/cli@latest generate --output ./src/db/schema/auth.ts --config ./src/auth.ts
```

## Development

The server automatically restarts when files change in development mode.
