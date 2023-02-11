class HashMap { 
    constructor() {
        this.arr = new Array(1) // initialize the array with a length of 8
        this.nums = 0; // number of elements in the hashmap
    }

    _resize() {
    const oldArr = this.arr;
    const newArr = new Array(oldArr.length * 2);
    this.arr.forEach(bucket => {
        if (bucket) {
            bucket.forEach(([key, value]) => {
                const index = this._hash(key, newArr.length);
                if (newArr[index]) {
                    newArr[index].push([key, value]);
                } else {
                    newArr[index] = [[key, value]];
                }
            });
        }
    });
    this.arr = newArr;
}


    _hash(key, tableSize) {   
        let hash = 17
        for(let i = 0; i < key.length; i++) { 
             hash = 13 * hash + key.charCodeAt(i) % tableSize
        }
        return hash 
    }
    set(key, value) {
        this.nums++
        this.loadFactor = this.nums / this.arr.length
        if(this.loadFactor > 0.8) {
            return this._resize()
        }

        const index = this._hash(key, this.arr.length) 
        if(this.arr[index]){
            this.arr[index].push([key, value])
        }else { 
            this.arr[index] = [[key, value]]
        }
    }
    get(key) {
        const index = this._hash(key,this.arr.length)
        if( this.arr[index] === undefined) {
            return null
        }
        return this.arr[index].find(x => x[0] === key)[1]
    }
}

const map = new HashMap()
map.set("firstName", "value1")
map.set("lastName", "value2")
map.set("age", "value3")
map.set("address", "value4")
console.log(map.arr.length)
console.log(map.get("age"))
