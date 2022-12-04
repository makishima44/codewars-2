const sequenceSum = (begin, end, step) => {
    if(begin > end) {
        return 0;
    } else {
        let count = 0;
        for(let i = begin; i <= end; i += step) {
        count += i;
    }
    return count;
    }
};
