import { auth } from '@everynews/api/auth'
import { Context } from 'elysia'

export const betterAuthView = (context: Context) => {
  const BETTER_AUTH_ACCEPT_METHODS = ['POST', 'GET']
  if (BETTER_AUTH_ACCEPT_METHODS.includes(context.request.method)) {
    console.log(context.request)
    return auth.handler(context.request)
  } else {
    context.error(405)
  }
}
