function DNAStrand(dna){
   return dna.split("").map(x => {
        if(x === "A") {
            return "T";
        } else if(x === "T") {
            return "A";
        } else if( x === "G") {
            return "C";
        } else {
            return "G"
        }
    }).join("");
}
