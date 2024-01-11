let score = {
  win: 0,
  lost: 0,
  tie: 0,
  displayScore() {
    return `Won:${score.win},
    Lost:${score.lost},
    Tie:${score.tie}`;
  }
};
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
      score.win++;
      return 'user won.';
    } else if (comptMove === 'Bat') {
      score.tie++;
      return 'it is a tie';
    }
    else {
      score.lost++;
      return 'compt won';
    }
  } else if (userMove === 'Ball') {
    if (comptMove === 'Ball') {
      score.tie++;
      return 'it is a tie.';
    } else if (comptMove === 'Bat') {
      score.lost++;
      return 'compt won';
    }
    else {
      score.win++;
      return 'user won';
    }
  } else {
    if (comptMove === 'Ball') {
      score.lost++;
      return 'comt won.';
    } else if (comptMove === 'Bat') {
      score.win++;
      return 'user won';
    }
    else {
      score.tie++;
      return 'it is tie';
    }
  }

}
function showresult(userMove, comptMove, result) {

  alert(`You have chosen ${userMove}.  compt choice is ${comptMove} 
  ${result}
  ${score.displayScore}`);
}
