/**
 * 🚀 Express Server Entry Point (`src/index.ts`)
 * -------------------------------------
 * This file initializes and configures an Express.js web server.
 * It loads environment variables, sets up middleware, defines routes,
 * handles errors, and starts the server.
 *
 * 📌 Key Features:
 * - Loads environment variables from `.env`.
 * - Configures security and performance middleware.
 * - Registers API routes.
 * - Handles 404 errors and other server errors.
 * - Starts the server (except in test mode).
 *
 * 🛠️ Technologies Used:
 * - **Express.js** → Backend web framework.
 * - **CORS** → Enables Cross-Origin Resource Sharing.
 * - **Helmet** → Enhances security by setting HTTP headers.
 * - **Compression** → Reduces response size for better performance.
 * - **Dotenv** → Loads environment variables.
 * - **Logging Middleware** → Captures incoming requests.
 * - **Error Middleware** → Handles application errors.
 */

// ✅ Import required modules
import express from 'express' // Web framework for handling HTTP requests
import cors from 'cors' // Middleware to allow cross-origin requests
import helmet from 'helmet' // Adds security headers to responses
import compression from 'compression' // Enables response compression for performance
import dotenv from 'dotenv' // Loads environment variables from `.env`
import routes from './routes' // Import API routes
import { logger } from './utils/logger' // Import logging utility
import requestLogger from './middleware/loggerMiddleware' // Middleware to log requests
import errorHandler from './middleware/errorMiddleware' // Middleware to handle errors

// ✅ Load environment variables from `.env` (if available)
dotenv.config()

// ✅ Create an instance of the Express application
const app = express()
const PORT = process.env.PORT || 4000 // Default to port 3000 if `PORT` is not set in `.env`

// --------------------------------------------
// ✅ Middleware (Pre-Processing Requests)
// --------------------------------------------

app.use(express.json()) // Parses incoming JSON request bodies
app.use(cors()) // Enables CORS to allow cross-origin requests
app.use(helmet()) // Secures responses by setting HTTP headers
app.use(compression()) // Compresses responses for better performance
app.use(requestLogger) // Logs incoming requests for debugging

// --------------------------------------------
// ✅ Register API Routes
// --------------------------------------------

app.use('/', routes) // Mounts all API routes under `/`

// --------------------------------------------
// ✅ Handle 404 Errors (Unmatched Routes)
// --------------------------------------------

app.use((req, res, next) => {
  res.status(404).json({ message: 'Route not found' }) // Respond with a 404 error
  next() // Pass control to the next middleware (if any)
})

// --------------------------------------------
// ✅ Global Error Handler (Catches All Errors)
// --------------------------------------------

app.use(errorHandler) // Handles all application errors in one place

// --------------------------------------------
// ✅ Start Server (Only If Not in Test Mode)
// --------------------------------------------

// If Jest is running tests, we do NOT start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    logger.info(`✅ Server is running on http://localhost:${PORT}`)
  })
}

// ✅ Export `app` for use in Jest tests
export { app }
