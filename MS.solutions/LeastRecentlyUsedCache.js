//define a function LRUCache that takes in a single argument capacity, which represents the maximum number of items the cache can hold.
//creating a new Map object to store the key-value pairs.

let LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = { key: null, value: null, next: null, prev: null };
    this.tail = { key: null, value: null, next: null, prev: null };

    //These two lines link the head and tail nodes together, forming the start and end of the doubly-linked list.
    this.head.next = this.tail;
    this.tail.prev = this.head;
};


// line checks if the given key exists in the cache's map object.
 //If the key exists, this line gets the associated node from the map object.
 //returns the value of the node if the key was found in the cache, or returns -1 if the key was not found.
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        let node = this.map.get(key);
        this.remove(node);
        this.add(node);        
        return node.value;
    }
    return -1;
};


// defines the put method on the LRUCache, which takes in two arguments key and value.
//If the given key already exists in the cache, the node is deleted from the doubly linked list and is updated as most recenlt used

LRUCache.prototype.put = function (key, value) {
    if (this.map.has(key)) {
        this.remove(this.map.get(key));
    }
    let node = { key: key, value: value, next: null, prev: null }; //creates a new node with the given key and value and adds it to the end of the list
    this.add(node);
    this.map.set(key, node);

//checking if the capacity is full, if it is full, the least recently used cache is being deleted in the cache
    if (this.map.size > this.capacity) {
        let removedNode = this.head.next;
        this.remove(removedNode);
        this.map.delete(removedNode.key);
    }
};

//the add method adds a node and connects it with its next and previous nodes in the doubly linked list
LRUCache.prototype.add = function(node) {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev.next = node;
    this.tail.prev = node;
};

//the remove method removes a node and connects it with its next and previous nodes in the doubly linked list
LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};
