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
            return -1
        }

        let node = this.cache.get(key);

        this._remove(node)
        this._add(node)
        
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
    }
}

// Example usage
let lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); 
lru.put(3, 3); 
console.log(lru.get(2)); 
lru.put(4, 4);
console.log(lru.get(1)); 
console.log(lru.get(3)); 
console.log(lru.get(4));