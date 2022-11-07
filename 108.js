function XO(str) {
    let one = 0;
    let two = 0;

    for(let i = 0; i < str.length; i++) {
        if(str[i] === "o" || str[i] === "O") {
            one += 1;
        } else if (str[i] === "x" || str[i] === "X") {
            two += 1;
        }
    }

   if( one === two) {
        return true;
   } else {
        return false
   }
}
