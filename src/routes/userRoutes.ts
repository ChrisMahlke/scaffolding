import { Router, Request, Response } from 'express'
import authenticate from '../middleware/authMiddleware' // Import authentication middleware

const router = Router()

// ✅ Protect all /users routes with authentication middleware
router.use(authenticate)

// ✅ Get all users
router.get('/', (req: Request, res: Response) => {
  res.json([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ])
})

// ✅ Get a single user by ID
router.get('/:id', (req: Request<{ id: string }>, res: Response) => {
  const userId = parseInt(req.params.id)
  const users = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Doe' },
  ]
  const user = users.find((u) => u.id === userId)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  res.json(user)
})

export default router
