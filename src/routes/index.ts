/**
 * 📌 API Route Entry Point (`src/routes/index.ts`)
 * -------------------------------------
 * This file defines the **main router** for the Express application.
 * It serves as the central hub where all API routes are registered.
 *
 * 🚀 Features:
 * - Provides a root API status check (`GET /`).
 * - Registers the **user-related routes** under `/users`.
 * - Helps keep the route structure **modular and maintainable**.
 *
 * 🛠️ Technologies Used:
 * - **Express.js** → Lightweight framework for handling HTTP routes.
 */

import { Router } from 'express'
import userRoutes from './userRoutes' // ✅ Import the user-related routes

// ✅ Create an instance of the Express Router
const router = Router()

// --------------------------------------------
// ✅ Root API Health Check Route (GET `/`)
// --------------------------------------------
// This route allows users to verify that the API is running.
router.get('/', (req, res) => {
  res.json({ message: '🚀 API is running!' })
})

// --------------------------------------------
// ✅ Register Sub-Routes
// --------------------------------------------
// - `/users` → Handles user-related API endpoints (see `userRoutes.ts`).
router.use('/users', userRoutes)

// ✅ Export the router to be used in `index.ts`
export default router
