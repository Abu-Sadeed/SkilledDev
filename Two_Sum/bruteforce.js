const bruteTwoSum = (array, target) => {
    const result = [];
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === target){
                result.push([i, j]);
            }
        }
    } 
    return result
}