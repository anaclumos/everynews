import { handle } from 'hono/vercel'
import app from '../src'

export const config = {
  runtime: 'edge',
}

const handler = handle(app)

export const GET = handler
export const POST = handler
export const PATCH = handler
export const PUT = handler
export const OPTIONS = handler
