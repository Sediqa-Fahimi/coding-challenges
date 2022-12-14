class HashTable{ // O(1) Insert, Delete, Access (Average case)
    constructor(size = 53){
        this.keyMap = new Array(size);
    }
    _hash(key){
        let total = 0;
        let A_PRIME = 31;
        for(let i = 0 ; i < Math.min(key.length, 100); i++){
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * A_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value){
        let index = this._hash(key);
        if(!this.keyMap[index]){
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key){
        let index = this._hash(key);
        if(!this.keyMap[index]) return undefined;
        for(let item of this.keyMap[index]){
            if(item[0] === key) return item[1];
        }
    }
    keys(){
        const keys = [];
        for(let item of this.keyMap){
            if(item){
                for(let ele of item){
                    if(!keys.includes(ele[0])) keys.push(ele[0]);
                }
            }
        }
        return keys;
    }
    values(){
        const values = [];
        for(let item of this.keyMap){
            if(item){
                for(let ele of item){
                    if(!values.includes(ele[1])) values.push(ele[1]);
                }
            }
        }
        return values;
    }
}

let hash = new HashTable();

hash.set('name', 'James');
hash.set('age', 16);
hash.set('city', 'SF');

console.log(hash.get('name'));
console.log(hash.get('country'));
console.log(hash.get('city'));
console.log(hash.get('age'));

console.log(hash.keys());
console.log(hash.values());

