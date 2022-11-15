function DNAtoRNA(dna) {
    return dna.split("").map( e => {
         if(e === "T") {
             return "U";
         } else {
             return e;
         }
    }).join("");
}
