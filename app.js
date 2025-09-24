// getting all the document ids here

const messageEl = document.getElementById('message-el');
const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const startEl = document.getElementById('start-el');
const newEl = document.getElementById('new-el');

// variables to store cards and sum

let cards = [];
let sum = 0;
let isAlive = false;

// random number function -> done

function getRandomNum() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10 
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
};

// start game function with the event listener

startEl.addEventListener('click', startGame)

function startGame() {
  isAlive = true;
  let firstNum = getRandomNum()
  let secondNum = getRandomNum()
  cards = [firstNum, secondNum]
  sum = firstNum + secondNum
  cardsEl.textContent = "Cards: " + cards.join(' ')
  sumEl.textContent = "Sum: " + sum
  renderGame()
}; 

// new card function 

newEl.addEventListener('click', newCard)

function newCard() {
  if(isAlive && sum < 21) {
  let newRandomCard = getRandomNum()
  cards.push(newRandomCard)
  sum += newRandomCard
  }
  renderGame()
}

// renderGame function

function renderGame () {
 cardsEl.textContent = "Cards: " + cards.join(' ')
  sumEl.textContent = "Sum: " + sum

    if (sum < 21) {
    messageEl.textContent = `Do you want to draw a new card?`
  } else if (sum === 21) {
    messageEl.textContent = `Woohhhh! You got BlackJack!!`
  } else {
    messageEl.textContent = `You're busted! Try again by clicking on the Start Game`
  }
}

