import { cors } from '@elysiajs/cors'
import Elysia from 'elysia'
import { authRouter } from './routes/auth'
import swagger from '@elysiajs/swagger'

const app = new Elysia()
  .use(cors())
  .use(
    swagger({
      path: '/',
      exclude: ['/json'], // Swagger itself
    }),
  )
  .get('/health', () => 'OK', {
    detail: {
      summary: 'Health Check',
      tags: ['Health'],
    },
  })

  .use(authRouter)
  .listen(process.env.BACKEND_PORT || 8000)

export default app