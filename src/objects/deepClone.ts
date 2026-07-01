/**
 * Creates a copy of an object,
 * without any links connections
 *
 * @template T Type of copied element
 * @param {T} value 
 */

export function deepClone<T>(value: T): T {
    if (value === null || typeof value !== 'object'){
        return value;
    }

    if (Array.isArray(value)){
        return value.map(item => deepClone(item)) as unknown as T;
    }
    
    const clone = {} as Record<string, unknown>;

    for (const key in value) {
        if (Object.hasOwn(value, key)){
            clone[key] = deepClone(value[key]) as unknown;
        }
    }

    return clone as T;
}




