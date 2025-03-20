/**
 * 🚨 Global Error Handler (`src/middleware/errorMiddleware.ts`)
 * -------------------------------------
 * This middleware **catches errors** thrown in the application
 * and returns a structured error response.
 *
 * 🚀 Features:
 * - Logs the error message for debugging.
 * - Returns a `500 Internal Server Error` response.
 * - Supports **custom error messages** (if available).
 *
 * 🛠️ Technologies Used:
 * - **Express Middleware** → Runs when an error occurs.
 */

import { Request, Response, NextFunction } from 'express'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(`❌ Error: ${err.message}`) // ✅ Log error message

  res.status(500).json({
    message: err.message || 'Internal Server Error', // ✅ Return error details in JSON format
  })

  next(err) // 🚀 Pass error to the next middleware (if needed)
}

export default errorHandler // ✅ Export middleware for use in `index.ts`
