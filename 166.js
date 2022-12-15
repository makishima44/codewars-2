function divisors(integer) {
  let arrInt = [];
  for(let i = 1; i <= integer; i++) {
    if(integer % i === 0) {
        arrInt.push(i);
    }
  }
  arrInt.pop();
  arrInt.shift();

  if(arrInt.length <= 0) {
    return `${integer} is prime`
  } else {
    return arrInt
  }
};
