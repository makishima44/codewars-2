function well(x){
    let count = 0;
    for(let i = 0; i < x.length; i++) {
        if(x[i] === "good") {
            count += 1;
        }
    }
    if(count === 0) {
        return "Fail!";
    } else if (count <= 2 ) {
        return "Publish!"
    } else {
        return "I smell a series!"
    }
}
