var cubeChecker = function(volume, side){
    if(volume <= 0 || side <= 0) {
        return false 
    } else if((volume / side) / side == side ) {
        return true;
    } else {
        return false;
    }
};
