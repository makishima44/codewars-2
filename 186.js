function pointsPer48(ppg, mpg) {
  if (mpg == 0) {
    return 0;
  } else {
    return Number(((ppg / mpg) * 48).toFixed(1));
  }
}
