/**
 * Groups array by a given key.
 * 
 * @template T is a type of obkects in array,
 * @template K is a type of key in array.
 * 
 * @param {T[]}
 * @param {K} 
 * 
 * @returns {Record<string, T[]>}
 */

export function groupBy<T, K extends keyof T>(
    array: T[],
    key: K
): Record<string, T[]> {
    return array.reduce <Record<string, T[]>>((result, item) => {
        const groupKey = String(item[key]);

        if(!result[groupKey]){
            result[groupKey] = []
        }

        result[groupKey].push(item);

        return result;
    }, {});
}

const user = [{ name: 'Alice', age: 25, role: 'admin' },
        { name: 'Bob', age: 30, role: 'user' },
        { name: 'Charlie', age: 25, role: 'user' }]

console.log(groupBy(user, "age"))