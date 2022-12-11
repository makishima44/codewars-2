function mergeArrays(arr1, arr2) {
    let arr = [...arr1, ...arr2].sort((a,b)=> a - b);
    let newArr = new Set(arr);
    return Array.from(newArr)
}
