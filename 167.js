function maskify(cc) {
   return cc.split("").map( function (e, index) {
        if(index < cc.length - 4) {
            return "#"
        } else {
            return e;
        }
    }).join("")
}
