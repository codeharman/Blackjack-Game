// getting all the document ids here

const messageEl = document.getElementById('message-el');
const cardsEl = document.getElementById('cards-el');
const sumEl = document.getElementById('sum-el');
const startEl = document.getElementById('start-el');
const newEl = document.getElementById('new-el');

// variables to store cards and sum

let cards = [];
let sum = 0;

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

// start game function 




