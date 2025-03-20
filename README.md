# **Scaffolding**

### **📌 Description**

This is a **TypeScript-based Express API project** with a fully configured development environment, including:

- ✅ **Jest for testing**
- ✅ **ESLint & Prettier for linting**
- ✅ **Middleware for authentication, logging, and error handling**
- ✅ **Supertest for API validation**
- ✅ **Modular, scalable code structure**

This project serves as both a **starter template** and an **educational resource** for learning **TypeScript, Express, testing, and middleware concepts**.

---

## **🚀 Features**

- **TypeScript** – Strongly typed JavaScript for maintainability.
- **Express.js** – Minimalist web framework for building APIs.
- **ESLint & Prettier** – Ensures code quality and consistent formatting.
- **Jest & Supertest** – Supports unit testing and API validation.
- **Nodemon** – Watches for file changes and restarts automatically.
- **Middleware System** – Handles authentication, logging, and errors.
- **Husky & lint-staged** – Pre-commit hooks for enforcing code quality.
- **Security Enhancements** – Uses Helmet and Compression for security and performance.

---

## **🛠️ Installation**

### **Prerequisites**

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (included with Node.js)
- [Git](https://git-scm.com/)

### **Clone the Repository**

```sh
git clone https://github.com/ChrisMahlke/scaffolding.git
cd scaffolding
```

### **Install Dependencies**

```sh
npm install
```

---

## **🚀 Usage**

### **Run the Development Server**

```sh
npm run dev
```

Starts the server with **Nodemon** for automatic reloads.

### **Compile TypeScript**

```sh
npm run compile
```

Generates JavaScript files in the `dist/` directory.

---

## **✅ Understanding the Codebase (File Summaries)**

This section provides an **overview of each file**, its **purpose**, and how it fits into the project.

### **📜 Main Server Entry Point (`src/index.ts`)**

- **Purpose:** Initializes and configures the **Express server**.
- **Key Features:**
  - Loads **environment variables**.
  - Registers **middleware** (authentication, logging, error handling).
  - Defines **routes**.
  - Starts the **server**.
- **Test Commands:**
  ```sh
  curl -X GET http://localhost:3000/
  ```
- **For Non-Technical Users:** This is the **main engine** of the API—it starts everything.

---

### **📜 Route Handling (`src/routes/index.ts` & `src/routes/userRoutes.ts`)**

- **Purpose:** Defines **API routes**.
- **Key Features:**
  - `index.ts`: Registers **all sub-routes** (e.g., `/users`).
  - `userRoutes.ts`: Handles **user-related API requests**.
- **Test Commands:**
  ```sh
  curl -X GET http://localhost:3000/users -H "x-api-key: secret123"
  ```
- **For Non-Technical Users:** This is where the **URLs** for the API are defined.

---

### **🔐 Authentication Middleware (`src/middleware/authMiddleware.ts`)**

- **Purpose:** Protects routes by requiring an **API key**.
- **How It Works:**
  - Reads the **API key** from `x-api-key` header.
  - Compares it with the **expected API key** in `.env`.
  - Returns **403 Unauthorized** if the key is missing or incorrect.
- **Test Commands:**
  ```sh
  curl -X GET http://localhost:3000/users -H "x-api-key: wrong-key"
  ```
- **For Non-Technical Users:** Think of this as a **security guard** that checks if requests are allowed.

---

### **📜 Global Error Handling (`src/middleware/errorMiddleware.ts`)**

- **Purpose:** Catches **unexpected errors** and returns structured **error messages**.
- **How It Works:**
  - Logs the error.
  - Returns **500 Internal Server Error** when something goes wrong.
- **Test Commands:**
  ```sh
  curl -X GET http://localhost:3000/non-existent-route
  ```
- **For Non-Technical Users:** This is like an **emergency response system** for handling crashes.

---

### **📜 Request Logging (`src/middleware/loggerMiddleware.ts`)**

- **Purpose:** Logs **all incoming API requests**.
- **How It Works:**
  - Logs the **HTTP method** and **URL path**.
- **Test Commands:** Start the server and send a request:
  ```sh
  npm run dev
  curl -X GET http://localhost:3000/users -H "x-api-key: secret123"
  ```
  **Expected log output:**
  ```
  INFO  [GET] /users
  ```
- **For Non-Technical Users:** This **keeps track of every request** to help with debugging.

---

### **📜 Logger Utility (`src/utils/logger.ts`)**

- **Purpose:** Configures **Pino** for structured logging.
- **How It Works:**
  - Uses **pretty-printing** in development.
  - Uses **JSON format** in production.
- **Test Commands:**
  ```typescript
  import { logger } from './utils/logger'
  logger.info('✅ Server is running!')
  ```
- **For Non-Technical Users:** Think of this as an **event log** for the server.

---

### **📜 Jest & Supertest Tests (`src/__tests__/sample.test.ts`, `src/__tests__/userRoutes.test.ts`)**

- **Purpose:** Ensures the API works correctly.
- **Key Features:**
  - `sample.test.ts`: Basic test to ensure **Jest** is working.
  - `userRoutes.test.ts`: Validates the **/users API routes**.
- **Test Commands:**
  ```sh
  npm run test
  ```
- **For Non-Technical Users:** These tests **automate API validation** to ensure everything works correctly.

---

## **🚀 Running Tests**

### **Run All Tests**

```sh
npm run test
```

### **Run Tests with Coverage**

```sh
npm run test:coverage
```

### **Run Tests in Verbose Mode**

```sh
npm run test -- --verbose
```

---

## **📌 API Routes**

### **1️⃣ Get all users**

**GET `/users`**

```json
[
  { "id": 1, "name": "John Doe" },
  { "id": 2, "name": "Jane Doe" }
]
```

### **2️⃣ Get a specific user**

**GET `/users/:id`**

```json
{
  "id": 1,
  "name": "John Doe"
}
```

If the user is not found:

```json
{ "message": "User not found" }
```

---

## **📂 Folder Structure**

```
scaffolding/
├── src/
│   ├── index.ts         # Main entry file
│   ├── routes/          # API routes
│   │   ├── index.ts     # Main route manager
│   │   ├── userRoutes.ts # User-related routes
│   ├── middleware/      # Middleware functions
│   │   ├── authMiddleware.ts
│   │   ├── errorMiddleware.ts
│   │   ├── loggerMiddleware.ts
│   ├── utils/           # Utility functions (Logger)
│   ├── __tests__/       # Unit tests for API
├── dist/                # Compiled TypeScript files
├── .husky/              # Pre-commit hooks
├── jest.config.js       # Jest testing configuration
├── package.json         # Project metadata & scripts
└── README.md            # Documentation
```

---

### **📌 Contributing**

1. **Fork the repository.**
2. **Create a new branch:**
   ```sh
   git checkout -b feature-branch
   ```
3. **Commit changes:**
   ```sh
   git commit -m "Added new feature"
   ```
4. **Push to GitHub:**
   ```sh
   git push origin feature-branch
   ```
5. **Open a Pull Request.**
