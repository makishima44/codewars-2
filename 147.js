function twoOldestAges(ages){
    let arraySort = ages.sort((a,b) => a - b);
    let arr = [];
    
    arr.push(arraySort[arraySort.length-2])
    arr.push(arraySort[arraySort.length-1])
    
    return arr;
}
