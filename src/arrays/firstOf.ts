/**
 * Returns first element of the array or undefined if array is empty.
 * 
 * @template T Type of arr elemements.
 * @param {T[]} array input arr
 * @returns {T | undefined } first element of the array or undefined
 * 
 */

export function firstOf<T>(array: T[]): T | undefined {
    return array[0];
}