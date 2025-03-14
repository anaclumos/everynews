import { cors } from '@elysiajs/cors'
import Elysia from 'elysia'
import { authRouter } from './routes/auth'
import { docsRouter } from './routes/docs'

const app = new Elysia()
  .use(cors())
  .use(docsRouter)
  .use(authRouter)
  .listen(process.env.BACKEND_PORT || 8000)
