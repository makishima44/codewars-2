var number=function(array){
   if(array.length <= 0) {
    return array;
   } else {
    return array.map((e,index) => {
       return  e = (index + 1) + ": " + e;
    })
   }
}
