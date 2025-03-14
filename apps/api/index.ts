import { cors } from '@elysiajs/cors'
import { swagger } from '@elysiajs/swagger'
import { auth } from '@everynews/api/auth'
import Elysia, { t } from 'elysia'
import { betterAuthView } from './auth/view'

const app = new Elysia()
  .get('/healthz', () => 'OK')
  .use(cors())
  .use(
    swagger({
      path: '/',
    }),
  )
  .all('/api/auth/*', betterAuthView)
  .post(
    '/auth/sign-in',
    ({ body }) => {
      return auth.api.signInEmail({
        body: {
          password: body.password,
          email: body.email,
        },
      })
    },
    {
      body: t.Object(
        {
          email: t.String(),
          password: t.String({
            minLength: 8,
            description: 'User password (at least 8 characters)',
          }),
        },
        {
          description: 'Expected an email and password',
        },
      ),
      detail: {
        summary: 'Sign in the user',
        tags: ['authentication'],
      },
    },
  )
  .post(
    '/auth/register',
    ({ body }) => {
      return auth.api.signUpEmail({
        body: {
          name: body.name,
          email: body.email,
          password: body.password,
        },
      })
    },
    {
      body: t.Object(
        {
          name: t.String(),
          email: t.String(),
          password: t.String({
            minLength: 8,
            description: 'User password (at least 8 characters)',
          }),
        },
        {
          description: 'Expected a name, email and password',
        },
      ),
      detail: {
        summary: 'Sign up the user',
        tags: ['authentication'],
      },
    },
  )
  .get(
    '/auth/verify/:token',
    ({ params }: { params: { token: string } }) => {
      return auth.api.verifyEmail({
        query: {
          token: params.token,
        },
      })
    },
    {
      query: t.Object(
        {
          token: t.String(),
        },
        {
          description: 'Expected a token',
        },
      ),
      detail: {
        summary: 'Verify the user',
        tags: ['authentication'],
      },
    },
  )

app.listen(process.env.BACKEND_PORT || 8000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
)
