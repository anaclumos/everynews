import { handle } from 'hono/vercel'
import app from '../src/server'

export default handle(app)
