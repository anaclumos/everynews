import { apiReference } from '@scalar/hono-api-reference'
import { type Swagger } from 'atlassian-openapi'
import { startCase } from 'es-toolkit'
import { Hono } from 'hono'
import { describeRoute, generateSpecs } from 'hono-openapi'
import { resolver } from 'hono-openapi/zod'
import { cors } from 'hono/cors'
import { Bindings } from 'hono/types'
import { z } from 'zod'
import { auth } from './auth'
import { mergeOpenAPISpecs } from './utils/openapi'

const app = new Hono<{
  Bindings: Bindings
  Variables: {
    user: typeof auth.$Infer.Session.user | null
    session: typeof auth.$Infer.Session.session | null
  }
}>()

app
  .use(
    'auth/*',
    cors({
      origin: (origin) => {
        // Allow requests from preview URLs, localhost, and production domains
        return origin &&
          (origin.includes('vercel.app') || // Should change to AWS
            origin.includes('localhost') ||
            origin === 'https://everynews.com')
          ? origin
          : ''
      },
      allowHeaders: ['Content-Type', 'Authorization'],
      allowMethods: ['POST', 'GET', 'OPTIONS'],
      exposeHeaders: ['Content-Length'],
      maxAge: 600,
      credentials: true,
    }),
  )
  .on(['POST', 'GET'], 'auth/*', (c) => {
    return auth.handler(c.req.raw)
  })
  .use('*', async (c, next) => {
    const session = await auth.api.getSession({ headers: c.req.raw.headers })
    if (!session) {
      c.set('user', null)
      c.set('session', null)
      return next()
    }
    c.set('user', session.user)
    c.set('session', session.session)
    return next()
  })

app.get(
  '/',
  describeRoute({
    tags: ['Default'],
    summary: '/ (Health)',
    responses: {
      200: {
        description: 'OK',
        content: {
          'text/plain': {
            schema: resolver(z.string()),
          },
        },
      },
    },
  }),
  (c) => {
    return c.text('OK')
  },
)

app.get('/openapi.json', async (c) => {
  const honoSpecs = (await generateSpecs(app, {
    documentation: {
      info: {
        title: 'Engine API',
        version: '1.0.0',
        description: 'Engine API Documentation',
      },
      externalDocs: {
        url: 'https://github.com/scalar-labs/scalar',
      },
      servers: [
        {
          url: process.env.VERCEL_URL
            ? `https://${process.env.VERCEL_URL}`
            : 'http://localhost:3000',
          description: process.env.VERCEL_URL
            ? 'Vercel Deployment'
            : 'Local Server',
        },
      ],
    },
  })) as Swagger.SwaggerV3

  const authSchema =
    (await auth.api.generateOpenAPISchema()) as Swagger.SwaggerV3

  const mergedSpecs = mergeOpenAPISpecs({
    title: 'EveryNews API',
    version: '1.0.0',
    specs: [
      { spec: honoSpecs },
      {
        spec: authSchema,
        pathPrefix: 'auth',
        transform: (name) => startCase(name),
      },
    ],
  })
  return c.json(mergedSpecs)
})

app.get(
  '/docs',
  apiReference({
    theme: 'saturn',
    spec: {
      url: '/openapi.json',
    },
  }),
)

export default app
