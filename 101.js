function countPositivesSumNegatives(input) {
    let array = [0,0];
    if (input === null || input.length === 0) {
       return [];
    } else {
    input.filter(number =>{
     if(Math.sign(number) === 1) {
         array[0] += 1;
     } else {
         array[1] += number;
     }
    })
    return array
  }
 }
 
