function minMax(arr){
    let arr1 = [];
    arr1.push(Math.min.apply(null, arr));
    arr1.push(Math.max.apply(null, arr));
    return arr1;
}
