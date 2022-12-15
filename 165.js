function solution(str, ending){
    if(str.substr(-ending.length, ending.length) === ending){
        return true;
    } else {
        return false;
    }
}
