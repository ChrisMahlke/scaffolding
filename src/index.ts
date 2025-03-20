import dotenv from 'dotenv'
dotenv.config() // ✅ Load environment variables FIRST

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import routes from './routes' // Import all routes
import { logger } from './utils/logger' // Import logger
import requestLogger from './middleware/loggerMiddleware' // Import request logging middleware
import errorHandler from './middleware/errorMiddleware' // Import error handler

const app = express()
const PORT = process.env.PORT || 3000

// ✅ Global Middleware
app.use(express.json()) // Parses JSON requests
app.use(cors()) // Enables Cross-Origin Resource Sharing
app.use(helmet()) // Security headers
app.use(compression()) // Compress responses for better performance
app.use(requestLogger) // Logs every request 🚀

// ✅ Routes
app.use('/', routes)

// ✅ Handle 404 errors properly
app.use((req, res, next) => {
  const error = new Error('Route not found')
  res.status(404)
  next(error) // Pass to error handler
})

// ✅ Register Global Error Middleware (MUST BE AFTER ROUTES)
app.use(errorHandler)

// ✅ Start Server
app.listen(PORT, () => {
  logger.info(
    `✅ Server is running on http://localhost:${PORT} in ${process.env.NODE_ENV || 'development'} mode`
  )
})
