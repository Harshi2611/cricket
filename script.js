let scorestr = localStorage.getItem('score');
let score;
resetscore(scorestr);
function resetscore(scorestr) {
  score = scorestr ? JSON.parse(scorestr) : {
    win: 0,
    lost: 0,
    tie: 0,
  };

  score.displayScore = function () {
    return `Score: Won:${score.win}, Lost:${score.lost}, Tie:${score.tie}`;
  };
  showresult();
}



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
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('#user-move').innerText = userMove ? `You have chosen ${userMove}` : '';
  document.querySelector('#computer-move').innerText = comptMove ? `compt choice is ${comptMove}` : '';
  document.querySelector('#result').innerText = result || '';
  document.querySelector('#score').innerText = score.displayScore();

}
