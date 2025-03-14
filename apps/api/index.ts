import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { auth } from '@everynews/api/auth'
import Elysia, { t } from 'elysia'
import { betterAuthView } from './auth/view'

const app = new Elysia()
  .get('/health', () => 'OK', {
    detail: {
      summary: 'Health Check',
      tags: ['Health'],
    },
  })
  .use(cors())
  .use(
    swagger({
      path: '/',
      exclude: ['/json'], // Swagger itself
    }),
  )
  .post(
    '/auth/sign-in',
    ({ body }: { body: { email: string } }) => {
      // magic link
      return auth.api.signInMagicLink({ body, headers: {} })
    },
    {
      body: t.Object(
        {
          email: t.String(),
        },
        {
          description: 'Expected an email',
        },
      ),
      detail: {
        summary: 'Magic Link',
        tags: ['Auth'],
      },
      response: t.Object({
        status: t.Boolean(),
      }),
    },
  )

app.listen(process.env.BACKEND_PORT || 8000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
