function generateRandom() {
  let compt;
  let randomno = Math.random() * 3;
  if (randomno > 0 && randomno <= 1) {
    return 'Bat';
  }
  else if (randomno > 1 && randomno <= 2) {
    return 'Ball';
  }
  else {
    return 'Stump';
  }

}
function getresult(userMove, comptMove) {
  if (userMove === 'Bat') {
    if (comptMove === 'Ball') {
      return 'user won.';
    } else if (comptMove === 'Bat') {
      return 'it is a tie';
    }
    else {
      return 'compt won';
    }
  } else if (userMove === 'Ball') {
    if (comptMove === 'Ball') {
      return 'it is a tie.';
    } else if (comptMove === 'Bat') {
      return 'compt won';
    }
    else {
      return 'user won';
    }
  } else {
    if (comptMove === 'Ball') {
      return 'comt won.';
    } else if (comptMove === 'Bat') {
      return 'user won';
    }
    else {
      return 'it is tie';
    }
  }

}
function showresult(userMove, comptMove, result) {
  alert(`You have chosen ${userMove}.  compt choice is ${comptMove} and  ${result}`);
}