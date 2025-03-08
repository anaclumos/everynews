import { RDSDataClient } from '@aws-sdk/client-rds-data'
import { drizzle } from 'drizzle-orm/aws-data-api/pg'
import { SEOUL } from '../const'
import * as schema from './schema'

const client = new RDSDataClient({
  region: process.env.AWS_REGION || SEOUL,
})

export const db = drizzle(client, {
  database: process.env.DATABASE_NAME!,
  secretArn: process.env.SECRET_ARN!,
  resourceArn: process.env.RESOURCE_ARN!,
  schema,
})
