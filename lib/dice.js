function roll() {
  return Math.floor( Math.random() * 6 + 1 );
}

function rollTwo() {
  return roll() + roll();
}
