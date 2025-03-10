/**
 * Validates that a switch statement is exhaustive.
 * @example
 *  type Car = 'Honda' | 'Toyota'
 *  const function = (car: Car) => {
 *    switch (car) {
 *     case 'Honda':
 *        return 'Honda';
 *      case 'Toyota':
 *        return 'Toyota';
 *      default:
 *        return getTypescriptAssertNever(action);
 *    }
 *  }
 */
export const getTypescriptAssertNever = (x: never): never => {
  throw new Error(`Unexpected object: ${x}`);
};
