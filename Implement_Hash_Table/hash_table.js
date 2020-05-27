class HashTable{
    constructor(size){
        this.size = size;
        this.table = [];
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];

        if(bucket){
           for(let i = 0; i < bucket.length; i++){
               if(bucket[i].key === key){
                   return bucket[i].value;
               }
           } 
        }
        return undefined
    }


    insert(key, value){
        const index = this.hash(key);

        if(!this.table[index]){
            this.table[index] = [];
        }

        const currentValue = this.get(key);
        
        if(typeof currentValue !== 'undefined'){
            const bucket = this.table[index];
        
            for(let i = 0; i < bucket.length; i++){
                if(bucket[i].key = key){
                    bucket[i].value = value;
                }
            }
        }else{
            this.table[index].push({key, value});
        }

    }


    remove(key){
        const value = this.get(key);
        this.insert(key, undefined);

        return value
    }

    hash(key){
        let hash = 0;

        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i)) % this.size; 
        }

        return hash;
        
    }
}

// Test
/*
const ConstantTimeTable = new HashTable(100);

ConstantTimeTable.insert('cookies', 6);
ConstantTimeTable.insert('lemons', 10);
ConstantTimeTable.insert('bananas', 8);
ConstantTimeTable.insert('cookies', 12);
ConstantTimeTable.insert('hand sanitizer', 100);
ConstantTimeTable.insert('laptops', 1);

console.log(ConstantTimeTable.table)
console.log(ConstantTimeTable.get('cookies'))
*/