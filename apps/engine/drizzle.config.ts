import { defineConfig } from 'drizzle-kit'

const isLocalDev =
  process.env.NODE_ENV === 'development' &&
  !process.env.AWS_AURORA_DATABASE_NAME

export default defineConfig({
  schema: './src/db/schema.ts',
  driver: isLocalDev ? 'pg' : 'aws-data-api',
  dialect: 'postgresql',
  dbCredentials: isLocalDev
    ? {
        connectionString: process.env.DATABASE_URL!,
      }
    : {
        database: process.env.AWS_AURORA_DATABASE_NAME!,
        secretArn: process.env.AWS_AURORA_SECRET_ARN!,
        resourceArn: process.env.AWS_AURORA_CLUSTER_ARN!,
      },
  verbose: true,
  strict: true,
})
