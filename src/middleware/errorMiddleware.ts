import { Request, Response, NextFunction } from 'express'

const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(`❌ Error: ${err.message}`)
  res.status(500).json({
    message: err.message || 'Internal Server Error',
  })

  next(err) // 🚀 Pass error to the next middleware (if needed)
}

export default errorHandler
