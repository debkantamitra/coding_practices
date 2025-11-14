class Node {
    constructor(key, value) {
        this.key = key
        this.value = value
        this.next = null
        this.prev = null
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
        
        this.head = new Node(null, null)
        this.tail = new Node(null, null)

        this.head.next = this.tail
        this.tail.prev = this.head
    }

    _remove(node) {
        const prev = node.prev
        const next = node.next

        prev.next = next
        next.prev = prev
    }

    _add(node) {
        const next = this.head.next

        this.head.next = node
        node.prev = this.head
        node.next = next
        next.prev = node
    }

    get(key) {
        if(!this.cache.get(key)) {
            console.log(-1)
            return -1
        }

        let node = this.cache.get(key);


        this._remove(node)
        this._add(node)

        console.log(node.value)
        return node.value
    }

    put(key, value) {
        if(this.cache.get(key)) {
            const node = this.cache.get(key);
            this._remove(node)
        }

        const newNode = new Node(key, value)
        
        this._add(newNode)
        this.cache.set(key, newNode)

        if(this.cache.size > this.capacity) {
            let lru = this.tail.prev

            this._remove(lru)
            this.cache.delete(lru.key)
        }

        console.log(this.cache)
    }
    
}

// Example usage
let lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4

// console.log(lRUCache);