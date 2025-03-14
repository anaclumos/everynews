import swagger from '@elysiajs/swagger'
import Elysia from 'elysia'

export const docsRouter = new Elysia({ prefix: '/docs' })
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
