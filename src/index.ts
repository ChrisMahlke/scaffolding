import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import dotenv from 'dotenv'
import routes from './routes'
import { logger } from './utils/logger'
import requestLogger from './middleware/loggerMiddleware'
import errorHandler from './middleware/errorMiddleware'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// ✅ Middleware
app.use(express.json())
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(requestLogger)

// ✅ Routes
app.use('/', routes)

// ✅ 404 Handler
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' })
  next()
})

// ✅ Global Error Handler
app.use(errorHandler)

// ✅ Start Server (Only If Not in Test Mode)
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    logger.info(`✅ Server is running on http://localhost:${PORT}`)
  })
}

// ✅ Ensure `app` is exported for Jest tests
export { app }
