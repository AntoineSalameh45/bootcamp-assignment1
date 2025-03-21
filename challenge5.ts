/*
Challenge 5: Deep Object Comparison
Write a function that compares two objects deeply for equality.
Example:
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // true
deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }); // false
*/

function deepEqual(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) {
        return true;
    }

    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (const key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

//testing

console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }));
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } }));
console.log(deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }));
console.log(deepEqual(null, null));
console.log(deepEqual(null, { a: 1 }));