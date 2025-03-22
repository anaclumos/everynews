import { cors } from '@elysiajs/cors'
import swagger from '@elysiajs/swagger'
import Elysia from 'elysia'
import { auth } from './auth'

const app = new Elysia()
  .use(cors())
  .mount(auth.handler)
  .use(
    swagger({
      documentation: {
        openapi: '3.1.1',
        info: {
          version: '1.0.0',
          title: 'Everynews API',
        },
      },
      path: '/',
    }),
  )

app.listen(process.env.BACKEND_PORT || 8000)
