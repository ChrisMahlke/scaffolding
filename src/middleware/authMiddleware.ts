import { Request, Response, NextFunction } from 'express'

const apiKey = process.env.API_KEY || 'secret123' // Load API key from .env

const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const userApiKey = req.header('x-api-key') // Read API key from request headers

  // Debugging logs
  console.log('🔍 Received API Key:', userApiKey)
  console.log('🔐 Expected API Key:', apiKey)

  if (!userApiKey || userApiKey.trim() !== apiKey.trim()) {
    console.log('❌ Authentication failed! Unauthorized request.')
    res.status(403).json({ message: 'Unauthorized' })
    return
  }

  console.log('✅ Authentication successful! Proceeding to route.')
  next() // Proceed if API key is correct
}

export default authenticate
