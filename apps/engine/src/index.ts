import { handle } from 'hono/vercel'
import app from './server'

export default handle(app)
