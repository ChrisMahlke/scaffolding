# **TypeScript Project**

## **📌 Description**

This is a **TypeScript-based Express API project** with a fully configured development environment, including **Jest for testing**, **ESLint & Prettier for linting**, and various utilities to enhance scalability and maintainability.

---

## **🚀 Features**

- **TypeScript** – Strongly typed JavaScript for better maintainability.
- **Express** – Fast and minimal web framework for building APIs.
- **ESLint & Prettier** – Ensures code quality and formatting.
- **Jest & Supertest** – Supports unit testing and API testing.
- **Nodemon** – Watches for file changes and restarts automatically.
- **Husky & lint-staged** – Pre-commit hooks for enforcing code quality.
- **CORS & Security Middleware** – Uses Helmet and Compression for API security and performance.

---

## **🛠️ Installation**

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Git](https://git-scm.com/)

### **Clone the Repository**

```sh
git clone https://github.com/ChrisMahlke/typescript-project.git
cd typescript-project
```

### **Install Dependencies**

```sh
npm install
```

---

## **🚀 Usage**

### **Development Server**

```sh
npm run dev
```

Starts the server with **Nodemon** for automatic reloads.

### **Compiling TypeScript**

```sh
npm run compile
```

Generates JavaScript files in the `dist/` directory.

### **Running Tests**

Run Jest unit tests:

```sh
npm run test
```

Run Jest with coverage:

```sh
npm run test:coverage
```

Run Jest in verbose mode:

```sh
npm run test -- --verbose
```

### **Linting and Formatting**

Check for lint errors:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint --fix
```

Check Prettier formatting:

```sh
npx prettier --check "src/**/*.ts"
```

Fix Prettier formatting:

```sh
npx prettier --write "src/**/*.ts"
```

---

## **📌 API Routes**

The project includes a **basic Express API**. The following endpoints are available:

### **1️⃣ Get all users**

**GET `/users`**

```json
Response:
[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Doe" }
]
```

### **2️⃣ Get a specific user**

**GET `/users/:id`**

```json
Request: /users/1
Response:
{
  "id": 1,
  "name": "John Doe"
}
```

If the user is not found:

```json
Response:
{
  "message": "User not found"
}
```

---

## **🛠️ API Testing with Supertest**

The API routes are **unit-tested using Jest and Supertest**.

To test API functionality, run:

```sh
npm run test
```

Example test in `src/__tests__/userRoutes.test.ts`:

```typescript
it('should return a single user', async () => {
  const res = await request(app).get('/users/1')
  expect(res.status).toBe(200)
  expect(res.body.name).toBe('John Doe')
})
```

---

## **📂 Folder Structure**

```
typescript-project/
├── src/
│   ├── index.ts       # Main entry file
│   ├── routes/        # API routes
│   │   ├── userRoutes.ts
│   ├── utils/         # Utility functions
│   ├── __tests__/     # Unit tests for API
├── dist/              # Compiled TypeScript files (ignored in Git)
├── .husky/            # Pre-commit hooks for linting
├── .eslintrc          # ESLint configuration
├── tsconfig.json      # TypeScript compiler settings
├── jest.config.js     # Jest testing configuration
├── package.json       # Project metadata & scripts
└── README.md          # Documentation
```

---

## **📌 Debugging Tips**

### **1️⃣ Debug Express Server**

Add `console.log()` statements in `src/index.ts`:

```typescript
console.log('Starting Express server...')
```

Start the server and check the output:

```sh
npm run dev
```

### **2️⃣ Debug Tests**

Run Jest with detailed output:

```sh
npm run test -- --verbose
```

### **3️⃣ Debug API Requests**

Use **Postman**, **cURL**, or:

```sh
npx httpie get http://localhost:3000/users
```

---

## **📌 Git Hooks (Husky & lint-staged)**

Husky prevents commits with linting errors. To test:

```sh
git add .
git commit -m "Test commit"
```

If there are lint errors, the commit will be blocked.

---

## **📌 Contributing**

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. Make changes and commit:
   ```sh
   git commit -m "Add new feature"
   ```
4. Push to GitHub:
   ```sh
   git push origin feature-branch
   ```
5. Open a **Pull Request**.

---

## **📜 License**

This project is licensed under the **MIT License**. See `LICENSE` for details.

---

### **🚀 Future Improvements**

- ✅ **Add database integration (MongoDB or PostgreSQL)**
- ✅ **Implement authentication (JWT or OAuth)**
- ✅ **Add more RESTful routes (POST, PUT, DELETE)**
- ✅ **Improve error handling with middleware**
- ✅ **Containerize the project with Docker**
