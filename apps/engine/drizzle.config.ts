import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  schema: './src/db/schema.ts',
  driver: 'aws-data-api',
  dialect: 'postgresql',
  dbCredentials: {
    database: process.env.AWS_AURORA_DATABASE_NAME!,
    secretArn: process.env.AWS_AURORA_SECRET_ARN!,
    resourceArn: process.env.AWS_AURORA_CLUSTER_ARN!,
  },
  verbose: true,
  strict: true,
})
