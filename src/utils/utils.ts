const world = "world";

export function hello(who: string = world): string {
  return `Hello, ${who}! `;
}

export function add(a: number, b: number): number {
  return a + b;
}
