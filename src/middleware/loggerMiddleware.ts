import { Request, Response, NextFunction } from 'express'
import { logger } from '../utils/logger' // Use the existing logger

const requestLogger = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  logger.info(`[${req.method}] ${req.path}`)
  next() // Move to the next middleware or route
}

export default requestLogger
