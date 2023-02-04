var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = { key: null, value: null, next: null, prev: null };
    this.tail = { key: null, value: null, next: null, prev: null };
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        this.remove(node);
        this.add(node);
        return node.value;
    }
    return -1;
};

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        this.remove(this.map.get(key));
    }
    let node = { key: key, value: value, next: null, prev: null };
    this.add(node);
    this.map.set(key, node);
    if (this.map.size > this.capacity) {
        let removedNode = this.head.next;
        this.remove(removedNode);
        this.map.delete(removedNode.key);
    }
};

LRUCache.prototype.add = function(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
};

LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};
