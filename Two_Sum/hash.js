const hashTwoSum = (array, target) => {
    const result = [];
    const arrayIndex = [];

    for(let i = 0; i < array.length; i++){
        const element = array[i];
        arrayIndex[element] = i;
    }

    for(let i = 0; i < array.length; i++){
        const currentValue = array[i];
        const matchedValue = target - currentValue;
        const matchedIndex = arrayIndex[matchedValue];

        if(matchedIndex >= 0 && matchedIndex !== i){
            result.push([i, matchedIndex]);

            arrayIndex[currentValue] = -1;
            arrayIndex[matchedValue] = -1;
        }
    }
    return result;
};