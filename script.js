
let compt;
function generateRandom() {
  let randomno = Math.random() * 3;
  if (randomno > 0 && randomno <= 1) {
    compt = 'Bat';
  }
  else if (randomno > 1 && randomno <= 2) {
    compt = 'Ball';
  }
  else {
    compt = 'Stump';
  }
}