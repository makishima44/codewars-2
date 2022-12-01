String.prototype.toAlternatingCase = function () {
    return this.split("").map(element=> {
    if(element === element.toLowerCase()) {
        return element.toUpperCase()
    } else {
        return element.toLowerCase();
    }
   }).join("")
}
