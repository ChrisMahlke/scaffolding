import { Router, Request, Response } from 'express'

const router = Router()

const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
]

// ✅ Get all users
router.get('/', (req: Request, res: Response): void => {
  res.json(users)
})

// ✅ Get user by ID
router.get('/:id', (req: Request<{ id: string }>, res: Response): void => {
  const userId = parseInt(req.params.id)
  const user = users.find((u) => u.id === userId)

  if (!user) {
    res.status(404).json({ message: 'User not found' })
    return
  }

  res.json(user)
})

export default router
