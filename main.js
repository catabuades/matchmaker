/* 

Homework:

I want you to create a matchmaker. So we will add items, chose two random ones, the one we click remains, the one we did not click is deleted from array. We do this until we have 1 element in the array. When we have 1 element, the last element is the winner.

0. STEP

Hide everything other than .items. We have 3 stages in our match game. 1. Adding items, 2. Mathc (Every round increase the round) 3. The winner


1. STEP 

Get all elements like 

GIULIA
ANNA
FRANCESCA
SARA
ALESSIA
MARTINA
MARIA
CHIARA

pasted to textarea, when save is clicked, you have to have an array like:

let items = ['GIULIA', 'ANNA', 'FRANCESCA', 'SARA', 'ALESSIA', 'MARTINA', 'CHIARA']

2. Select two elements randomly and show them in the match list. The one we clicked is the winner. Show it as the previous winner. The one we did not click is loser, remove it from the array.

3. When we have only 1 element in array, game ends and we have a winner. Show the winner in the winner div.

Bonus: Can you make the game persistent with nodejs? Can you save somewhere how many times this item is lost or won?

*/

let items = [];
let saveButton = document.getElementById("Save");
let inputFirstNumber = document.getElementById("FirstNumber");
let inputSecondNumber = document.getElementById("SecondNumber");
let totalCounterText = document.getElementById("Total");
let roundWinnerText = document.getElementById("RoundWinner");
let roundCounterText = document.getElementById("Round");
let winnerText = document.getElementById("Winner");

function getItems() {
	items = document.getElementById('list').value.match(/[^\r\n]+/g);
  
  inputFirstNumber.innerHTML = getItemRandomly(items);
  inputSecondNumber.innerHTML = getItemRandomly(items);
  if (inputFirstNumber.innerHTML === inputSecondNumber.innerHTML) {
    inputSecondNumber.innerHTML = getItemRandomly(items);
  }

  totalCounterText.innerHTML = items.length;

  if (items.length == 0) {
    return;
  }

  if (items.length > 0) {
    inputFirstNumber.addEventListener("click", removeItemFromArray);
    inputSecondNumber.addEventListener("click", removeItemFromArray);
  }
}

function getItemRandomly(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  
  const item = array[randomIndex];
  //console.log('getItems -->' + items)
  //console.log('item --> ' + item);

  return item;
}

function findItemInArray(item, array) {
  //console.log('find item --> ' + item);
  //console.log('search in array --> ' + array);
  for (let i = 0; i < array.length; i++) {
    if (item === array[i]) {
      array.splice(i, 1);
      //console.log('removed --> ' + items)
      totalCounterText.innerHTML = items.length;
      if (totalCounterText.innerHTML == 1) {
        inputFirstNumber.innerHTML = "...";
        inputSecondNumber.innerHTML = "...";
        winnerText.innerHTML = array[0];
        return;
      }
      inputFirstNumber.innerHTML = getItemRandomly(items);
      inputSecondNumber.innerHTML = getItemRandomly(items);
      if (inputFirstNumber.innerHTML === inputSecondNumber.innerHTML) {
        inputSecondNumber.innerHTML = getItemRandomly(items);
      }
    }
  }
}

function removeItemFromArray(event) {
  if (event.target.id === "FirstNumber") {
    findItemInArray(inputSecondNumber.textContent, items);
    roundWinnerText.innerHTML = inputFirstNumber.textContent;
    //console.log('first item')
  }
  if (event.target.id === "SecondNumber") {
    findItemInArray(inputFirstNumber.textContent, items);
    roundWinnerText.innerHTML = inputSecondNumber.textContent;
    //console.log('second item')
  }
  roundCounterText.innerHTML = parseInt(roundCounterText.textContent)+1;
}

saveButton.addEventListener("click", getItems);














