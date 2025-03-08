import { RDSDataClient } from '@aws-sdk/client-rds-data'
import { drizzle as awsDrizzle } from 'drizzle-orm/aws-data-api/pg'
import { drizzle as localDrizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import { SEOUL } from '../const'
import * as schema from './schema'

const isLocalDev =
  process.env.NODE_ENV === 'development' &&
  !process.env.AWS_AURORA_DATABASE_NAME

const db: ReturnType<typeof awsDrizzle> | ReturnType<typeof localDrizzle> =
  isLocalDev
    ? localDrizzle(
        new Pool({
          connectionString: process.env.DATABASE_URL,
        }),
        { schema },
      )
    : awsDrizzle(
        new RDSDataClient({
          region: process.env.AWS_REGION || SEOUL,
        }),
        {
          database: process.env.AWS_AURORA_DATABASE_NAME!,
          secretArn: process.env.AWS_AURORA_SECRET_ARN!,
          resourceArn: process.env.AWS_AURORA_CLUSTER_ARN!,
          schema,
        },
      )
export { db }
