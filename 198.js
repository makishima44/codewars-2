function multiply(number) {
  if (String(number)[0] === "-") {
    return number * Math.pow(5, String(number).length - 1);
  } else {
    return number * Math.pow(5, String(number).length);
  }
}
