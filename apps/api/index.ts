import { cors } from '@elysiajs/cors'
import swagger from '@elysiajs/swagger'
import { mergeOpenAPISpecs } from '@everynews/util'
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

// Add a combined OpenAPI endpoint
app.get('/openapi.json', async ({ set }) => {
  // Fetch the auth OpenAPI spec
  const authSpec = await fetch(
    'http://localhost:' +
      (process.env.BACKEND_PORT || 8000) +
      '/auth/reference/openapi.json',
  ).then((res) => res.json())

  // Fetch the main API spec
  const mainSpec = await fetch(
    'http://localhost:' + (process.env.BACKEND_PORT || 8000) + '/',
  ).then((res) => res.json())

  // Merge the specs
  const combinedSpec = mergeOpenAPISpecs({
    title: 'Everynews Combined API',
    version: '1.0.0',
    specs: [
      { spec: mainSpec },
      {
        spec: authSpec,
        pathPrefix: '/auth',
        transform: (name: string) => `Auth-${name}`,
      },
    ],
  })

  set.headers['Content-Type'] = 'application/json'
  return combinedSpec
})

app.listen(process.env.BACKEND_PORT || 8000)
