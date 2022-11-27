function strCount(str, letter){  
    let count = 0;
    if(str.length === 0) {
        count = 0;
    } else {
        for(let i = 0; i < str.length; i++) {
            if(str[i] === letter) {
                count += 1;
            }
        }
    }
    return count
}
