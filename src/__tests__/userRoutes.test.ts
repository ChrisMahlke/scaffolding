import request from 'supertest'
import express from 'express'
import userRoutes from '../routes/userRoutes'

const app = express()
app.use(express.json())
app.use('/users', userRoutes)

describe('User Routes', () => {
  it('should return a list of users', async () => {
    const res = await request(app).get('/users')
    expect(res.status).toBe(200)
    expect(res.body.length).toBeGreaterThan(0)
    expect(res.body).toEqual([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ])
  })

  it('should return a single user', async () => {
    const res = await request(app).get('/users/1')
    expect(res.status).toBe(200)
    expect(res.body.name).toBe('John Doe')
  })

  it('should return 404 for a non-existent user', async () => {
    const res = await request(app).get('/users/99')
    expect(res.status).toBe(404)
    expect(res.body.message).toBe('User not found')
  })
})
