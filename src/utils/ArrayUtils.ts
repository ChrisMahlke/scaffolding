/**
 * A generic utility for working with arrays.
 */

export function getFirstItem<T>(array: T[]): T | null {
  return array.length > 0 ? array[0] : null;
}
