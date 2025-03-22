import { cors } from '@elysiajs/cors'
import swagger from '@elysiajs/swagger'
import Elysia from 'elysia'
import { authRouter } from './routes/auth'

new Elysia()
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
