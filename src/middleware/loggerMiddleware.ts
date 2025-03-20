/**
 * 📜 Request Logger Middleware (`src/middleware/loggerMiddleware.ts`)
 * -------------------------------------
 * This middleware logs **all HTTP requests** to provide visibility
 * into API usage.
 *
 * 🚀 Features:
 * - Logs HTTP method (`GET`, `POST`, etc.) and request path (`/users`, etc.).
 * - Uses **Pino logger** for efficient logging.
 * - Helps with debugging API requests.
 *
 * 🛠️ Technologies Used:
 * - **Express Middleware** → Runs on every incoming request.
 * - **Pino Logger** → High-performance logging.
 */

import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger' // ✅ Use the existing logger

const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.info(`[${req.method}] ${req.path}`) // ✅ Log HTTP method and path
  next() // ✅ Move to the next middleware or route
}

export default requestLogger // ✅ Export middleware for use in `index.ts`
