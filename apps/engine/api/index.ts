import { handle } from 'hono/vercel'
import app from '../src'

export const config = {
  runtime: 'edge',
}

export default handle(app)
