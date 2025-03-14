import { auth } from '@everynews/api/auth'
import Elysia, { t } from 'elysia'

export const authRouter = new Elysia({ prefix: '/auth' })
  .post(
    '/sign-in',
    ({ body }) => auth.api.signInMagicLink({ body, headers: {} }),
    {
      body: t.Object({
        email: t.String(),
      }),
      detail: {
        summary: 'Magic Link',
        tags: ['Auth'],
      },
      response: t.Object({
        status: t.Boolean(),
      }),
    },
  )
  .get(
    '/magic-link/verify',
    async ({ query, set }) => {
      try {
        const { user } = await auth.api.magicLinkVerify({
          query: {
            token: query.token,
            callbackURL: query.callbackURL,
          },
          headers: {},
        })
        set.status = 200
        return { status: !!user }
      } catch (error) {
        set.status = 401
        return {
          status: false,
          error:
            process.env.NODE_ENV === 'development'
              ? JSON.stringify(error)
              : 'Invalid or Expired Magic Link',
        }
      }
    },
    {
      detail: {
        summary: 'Magic Link Verification',
        tags: ['Auth'],
      },
      response: t.Object({
        status: t.Boolean(),
      }),
      query: t.Object({
        token: t.String(),
        callbackURL: t.String(),
      }),
    },
  )
