/**
 * 📌 User Routes (`src/routes/userRoutes.ts`)
 * -------------------------------------
 * This file defines all API routes related to **user management**.
 * It allows retrieving a list of users or fetching a single user by ID.
 *
 * 🚀 Features:
 * - Protects all `/users` routes with authentication middleware.
 * - Returns a **list of users** (`GET /users`).
 * - Fetches a **single user by ID** (`GET /users/:id`).
 *
 * 🛠️ Technologies Used:
 * - **Express.js** → Defines HTTP endpoints.
 * - **Middleware** → Secures routes using authentication.
 */

import { Router, Request, Response } from 'express'
import authenticate from '../middleware/authMiddleware' // ✅ Import authentication middleware

// ✅ Create a new router instance
const router = Router()

// --------------------------------------------
// ✅ Protect All `/users` Routes with Authentication
// --------------------------------------------
// Middleware ensures that only authenticated requests can access these routes.
router.use(authenticate)

// --------------------------------------------
// ✅ Get All Users (GET `/users`)
// --------------------------------------------
// Returns a hardcoded list of users as an example.
router.get('/', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ])
})

// --------------------------------------------
// ✅ Get a Single User by ID (GET `/users/:id`)
// --------------------------------------------
// Retrieves a specific user based on the provided ID.
router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const userId = parseInt(req.params.id) // Convert the ID from string to number
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ]
  const user = users.find((u) => u.id === userId) // Search for the user

  if (!user) {
    res.status(404).json({ message: 'User not found' }) // Return 404 if user doesn't exist
    return
  }

  res.json(user) // Return user data if found
})

// ✅ Export the router to be used in `index.ts`
export default router
