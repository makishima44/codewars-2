function betterThanAverage(classPoints, yourPoints) {
   if ((classPoints.reduce((total, amount) => total + amount) / classPoints.length) < yourPoints) {
    return true;
   } else {
    return false;
   }
}
