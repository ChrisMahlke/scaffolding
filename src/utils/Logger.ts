/**
 * A simple logger interface to enforce structure.
 */

export interface Logger {
  log: (message: string) => void;
}

export class ConsoleLogger implements Logger {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
