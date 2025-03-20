/**
 * 📜 Logger Utility (`src/utils/logger.ts`)
 * -------------------------------------
 * This file configures a logger using `pino`, a fast and lightweight logging
 * library. It helps developers track application events, errors, and debugging
 * information efficiently.
 *
 * 🚀 Why Use Pino?
 * - **Super fast** compared to other logging libraries (e.g., Winston).
 * - **JSON-based logging** for structured logs.
 * - **Pretty-printing in development** for readability.
 * - **Optimized for production** with minimal overhead.
 *
 * 📌 Features:
 * - Uses `pino-pretty` in development for formatted logs.
 * - Uses default JSON logging in production for structured logs.
 */

import pino from 'pino' // ✅ Import the Pino logging library

// ✅ Determine if the app is running in development mode
const isDev = process.env.NODE_ENV !== 'production' // Returns `true` if NOT in production

// ✅ Create a logger instance with appropriate settings
export const logger = pino({
  level: 'info', // Logs messages at "info" level or higher (e.g., "warn", "error")

  // ✅ Pretty-print logs in development for better readability
  transport: isDev ? { target: 'pino-pretty' } : undefined,
  // - If `isDev` is `true`, logs are formatted nicely using `pino-pretty`
  // - If `isDev` is `false` (i.e., in production), logs remain in structured JSON format
})
