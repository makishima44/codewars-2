function getSum( a,b ) {
    let arr = [];

    if(a === b) {
        return a;
    } else if(b > a) {
        for(let i = a; i <= b; i++) {
            arr.push(i);
        }
    } else if (a > b) {
        for(let i = b; i <= a; i++) {
            arr.push(i);
        }
    }

    return arr.reduce((a,b) => a + b);
}
