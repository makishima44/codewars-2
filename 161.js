function index(array, n){
    if(array.length - 1 < n) {
        return -1;
    } else {
        return Math.pow(array[n], n)
    }
}
