/*
Challenge 6: LRU Cache Implementation
Implement an LRU (Least Recently Used) Cache with get(key) and put(key, value)
operations.
*/

class LRUCache {
    private capacity: number;
    private cache: Map<number, number>;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key: number): number | null {
        if (!this.cache.has(key)) {
            return null;
        }
        const value = this.cache.get(key)!;
        this.cache.delete(key);
        this.cache.set(key, value);

        return value;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        } else if (this.cache.size >= this.capacity) {
            const lastUsedKey = this.cache.keys().next().value;
            this.cache.delete(lastUsedKey);
        }
        this.cache.set(key, value);
    }

}
// Example:
const cache = new LRUCache(2);
console.log(cache.put(1, 1));
console.log(cache.put(2, 2));
console.log(cache.get(1)); // 1
console.log(cache.put(3, 3)); // Removes key 2
console.log(cache.get(2)); // null