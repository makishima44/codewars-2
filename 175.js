function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let arr = [];
  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      arr.push(birds[i]);
    }
  }
  return arr;
}
