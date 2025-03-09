import { handle } from 'hono/vercel'
import app from '../src'

export default handle(app)
