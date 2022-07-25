'use strict';
// Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const button = document.querySelectorAll('.btn');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNewGame = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1'); 

let scores, currentScore, activePlayer, playing;


const init = () => {
// Starting Conditions
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  
  
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

}
init();


// function to switch player
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality
buttonRoll.addEventListener('click', () => {
  if (playing) {
// 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

// 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

// 3. Check for rolled 1: if true, switch to next player
   if (dice !== 1) {
    currentScore += dice;

    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    current0El.textContent = currentScore;

  } else {
    // switch to next player
    switchPlayer();
  }
}
});


buttonHold.addEventListener('click', () => {
  if (playing) {
  // Add current score to active player score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
  // Check score is already at least >= 100
    if (scores[activePlayer] >= 20 ) {
      // Finish teh game
      playing = false;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
        // Switch to next player
      switchPlayer();
    }
  
  }

});


// Start New game button
buttonNewGame.addEventListener('click', init)