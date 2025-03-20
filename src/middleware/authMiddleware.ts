/**
 * 🔑 Authentication Middleware (`src/middleware/authMiddleware.ts`)
 * -------------------------------------
 * This middleware ensures that only requests with a valid API key
 * can access protected routes.
 *
 * 🚀 Features:
 * - Reads API key from **request headers** (`x-api-key`).
 * - Compares it with the expected API key stored in **environment variables**.
 * - Denies access (`403 Unauthorized`) if the API key is missing or incorrect.
 * - Logs debugging information for visibility.
 *
 * 🛠️ Technologies Used:
 * - **Express Middleware** → Runs before the request reaches the route handler.
 */

import { Request, Response, NextFunction } from 'express'

const apiKey = process.env.API_KEY || 'secret123' // ✅ Load API key from `.env`

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const userApiKey = req.header('x-api-key') // ✅ Read API key from request headers

  // ✅ Debugging logs (useful for checking API key issues)
  console.log('🔍 Received API Key:', userApiKey)
  console.log('🔐 Expected API Key:', apiKey)

  if (!userApiKey || userApiKey.trim() !== apiKey.trim()) {
    console.log('❌ Authentication failed! Unauthorized request.')
    res.status(403).json({ message: 'Unauthorized' })
    return
  }

  console.log('✅ Authentication successful! Proceeding to route.')
  next() // ✅ Move to the next middleware or route handler
}

export default authenticate // ✅ Export middleware to use in routes
