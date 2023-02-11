class HashMap { 
    constructor() {
        this.arr = new Array(1001) // initialize the array with a length of 1001
        this.nums = 0; // number of elements in the hashmap
    }

    // function to resize the hashmap when the number of elements exceeds the length of the array
    _resize() {
        const oldArr = this.arr; // store the old array in a variable
        const newArr = new Array(oldArr.length * 2); // create a new array with double the length of the old array

        // loop through each bucket of the old array and add its elements to the new array
        oldArr.forEach(bucket => {
            if (bucket) {
                bucket.forEach(([key, value]) => {
                    const index = this._hash(key, newArr.length); // hash the key to get its index in the new array
                    if (newArr[index]) {
                        newArr[index].push([key, value]); // if the index is not empty, add the [key, value] pair to the bucket
                    } else {
                        newArr[index] = [[key, value]]; // if the index is empty, create a new bucket and add the [key, value] pair
                    }
                });
            }
        });
        this.arr = newArr; // set the new array as the main array
    }

    // function to hash the key and get its index in the array
    _hash(key, tableSize) {   
        let hash = 17;
        for(let i = 0; i < key.length; i++) { 
             hash = (13 * hash + key.charCodeAt(i)) % tableSize;
        }
        return hash;
    }

    // function to set a key value pair in the hashmap
    set(key, value) {
        this.nums++; // increment the number of elements in the hashmap
        // if the number of elements exceeds the length of the array, resize the hashmap
        if((this.nums / this.arr.length) > 0.8) {
            return this._resize();
        }

        const index = this._hash(key, this.arr.length); // hash the key to get its index in the array
        // if the index is not empty, add the [key, value] pair to the bucket
        if(this.arr[index]){
            this.arr[index].push([key, value]);
        }else { 
            // if the index is empty, create a new bucket and add the [key, value] pair
            this.arr[index] = [[key, value]];
        }
    }

    // function to get the value of a key from the hashmap
    get(key) {
        const index = this._hash(key,this.arr.length); // hash the key to get its index in the array
        // if the index is empty, return null
        if( this.arr[index] === undefined) {
            return null;
        }
        // return the value of the key by finding it in the bucket
        return this.arr[index].find(x => x[0] === key)[1];
    }
}

const map = new HashMap();


map.set("firstName", "value1")
map.set("care", "value2")
map.set("race", "value3")

console.log(map.arr.length)
console.log(map.get("firstName"))
console.log(map.get("care")) // returns value2 as expected
console.log(map.get("race")) // returns value3 as expected
