### **📜 EventEmitter.ts (Fully Commented)**

```typescript
/**
 * A strongly-typed Event Emitter class that allows registering event listeners
 * and emitting events with type safety.
 *
 * Use cases:
 * - Decoupling event handling logic from the main application flow.
 * - Enforcing correct argument types for emitted events.
 * - Building modular, event-driven applications (e.g., messaging systems, UI interactions).
 */

export class TypedEventEmitter<
  T extends Record<string, (...args: any[]) => void>
> {
  // A private object to store event listeners.
  // Each event key has an array of functions (listeners) that respond to the event.
  private listeners: { [K in keyof T]?: T[K][] } = {};

  /**
   * Registers an event listener for a specific event.
   * @param event - The event name (must be a valid key from the generic type T).
   * @param listener - The callback function to execute when the event is emitted.
   */
  on<K extends keyof T>(event: K, listener: T[K]) {
    // Ensure the event has an array for storing listeners, then add the new listener
    (this.listeners[event] ||= []).push(listener);
  }

  /**
   * Emits an event and calls all registered listeners for that event.
   * @param event - The event name (must be a valid key from the generic type T).
   * @param args - Arguments that will be passed to the event listeners.
   */
  emit<K extends keyof T>(event: K, ...args: Parameters<T[K]>) {
    // If listeners exist for the given event, call each listener with the provided arguments.
    this.listeners[event]?.forEach((listener) => listener(...args));
  }
}
```

---

### **🛠 How It Works (Explained for a Beginner)**

This `TypedEventEmitter` class is a **generic** event system that allows registering and emitting events in a **type-safe way**.

#### **🔹 What’s a Generic?**

A **generic** in TypeScript is a way to make a function or class flexible while still maintaining type safety. In this case:

```typescript
class TypedEventEmitter<T extends Record<string, (...args: any[]) => void>>
```

- The **`T`** represents an object where each key is an event name and each value is a function (event handler).
- **Example:** If `T` is `{ dataReceived: (data: string) => void }`, then:
  - The event name must be `"dataReceived"`.
  - The listener function must accept a `string` argument.

#### **🔹 What is `on()` Doing?**

The `on()` method allows us to register event listeners.

```typescript
on<K extends keyof T>(event: K, listener: T[K])
```

- `K extends keyof T` ensures the event name is valid (a key of `T`).
- `T[K]` ensures the function has the correct argument types.

#### **🔹 What is `emit()` Doing?**

The `emit()` method **triggers an event**, calling all registered listeners for that event.

```typescript
emit<K extends keyof T>(event: K, ...args: Parameters<T[K]>)
```

- `...args: Parameters<T[K]>` ensures the event gets the correct arguments.

---

### **📌 Example Usage in `index.ts`**

```typescript
// index.ts
import { TypedEventEmitter } from "./EventEmitter"; // Importing the event emitter

// Defining the event types (must match the shape of TypedEventEmitter)
type Events = {
  dataReceived: (data: string) => void;
  error: (message: string) => void;
};

// Creating an instance of TypedEventEmitter with defined event types
const emitter = new TypedEventEmitter<Events>();

// Register an event listener for "dataReceived"
emitter.on("dataReceived", (data) => console.log("Data received:", data));

// Register an event listener for "error"
emitter.on("error", (message) => console.error("Error:", message));

// Emit an event (this will trigger all "dataReceived" listeners)
emitter.emit("dataReceived", "Hello, TypeScript!");

// Emit an "error" event
emitter.emit("error", "Something went wrong!");
```
