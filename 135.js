function correct(string){
   return string.split("").map(letter => {
        if(letter === "0") {
            return "O";
        } else if(letter === "5") {
            return "S";
        } else if(letter === "1") {
            return "I";
        } else {
            return letter;
        }
    }).join("")
}
