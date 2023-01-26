function smallEnough(a, limit){
    if( a.some((e) => e > limit) == true) {
        return false;
    } else {
        return true;
    }
}
