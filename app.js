'use strict';
// Selecting Elements
const button = document.querySelectorAll('.btn');
const buttonRoll = document.querySelector('.btn--roll');
const buttonHold = document.querySelector('.btn--hold');
const buttonNewGame = document.querySelector('.btn--new');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1'); 


// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0;

// Rolling dice functionality
buttonRoll.addEventListener('click', () => {
// 1. Generate a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

// 2. Display dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

// 3. Check for rolled 1: if true, switch to next player
   if (dice !== 1) {
    currentScore += dice;
    current0El.textContent = currentScore;

  } else {


  }
});