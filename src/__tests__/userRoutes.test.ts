/**
 * 🛠️ API Route Tests (`src/__tests__/userRoutes.test.ts`)
 * -------------------------------------
 * This file contains Jest tests to verify the **user-related API routes**.
 * It ensures that the API behaves correctly when retrieving users.
 *
 * 🚀 Features:
 * - Uses **Supertest** to send HTTP requests to the Express server.
 * - Tests for correct responses, including:
 *   - ✅ Fetching all users (`GET /users`).
 *   - ✅ Fetching a single user by ID (`GET /users/:id`).
 *   - ✅ Handling non-existent users properly (`GET /users/99`).
 * - Includes **API Key authentication** to match the actual security setup.
 *
 * 🛠️ Technologies Used:
 * - **Jest** → Testing framework for assertions.
 * - **Supertest** → HTTP request testing utility.
 * - **Express** → The backend framework under test.
 */

import request from 'supertest'
import { app } from '../index' // ✅ Import the Express app

const API_KEY = 'secret123' // ✅ Ensure this matches the value in `.env`

describe('User Routes', () => {
  // ✅ Test: Get all users
  it('should return a list of users', async () => {
    const res = await request(app)
      .get('/users') // ✅ Send a GET request to `/users`
      .set('x-api-key', API_KEY) // ✅ Add API Key Header for authentication

    expect(res.status).toBe(200) // ✅ Expect a 200 OK response
    expect(res.body.length).toBeGreaterThan(0) // ✅ Ensure at least one user exists
    expect(res.body).toEqual([
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
    ]) // ✅ Check if the response matches the expected users
  })

  // ✅ Test: Get a single user by ID
  it('should return a single user', async () => {
    const res = await request(app)
      .get('/users/1') // ✅ Send a GET request to `/users/1`
      .set('x-api-key', API_KEY) // ✅ Add API Key Header for authentication

    expect(res.status).toBe(200) // ✅ Expect a 200 OK response
    expect(res.body.name).toBe('John Doe') // ✅ Ensure the returned user is John Doe
  })

  // ✅ Test: Requesting a non-existent user
  it('should return 404 for a non-existent user', async () => {
    const res = await request(app)
      .get('/users/99') // ✅ Send a GET request to `/users/99` (invalid user)
      .set('x-api-key', API_KEY) // ✅ Add API Key Header for authentication

    expect(res.status).toBe(404) // ✅ Expect a 404 Not Found response
    expect(res.body.message).toBe('User not found') // ✅ Check if error message is correct
  })
})
