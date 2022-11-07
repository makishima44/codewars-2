function removeEveryOther(arr){
    return arr.filter(function (a, b) {
       return b % 2 === 0;
    })
}
