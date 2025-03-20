import pino from 'pino'

const isDev = process.env.NODE_ENV !== 'production'

export const logger = pino({
  level: 'info',
  transport: isDev ? { target: 'pino-pretty' } : undefined, // Use default JSON logging in production
})
