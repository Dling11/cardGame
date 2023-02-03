let hasBlackJack = false;
let startGame = false;
const button = document.querySelector('#btn');
const startButton = document.querySelector('#btn-second');
const showLabel = document.querySelector('#showLabel');
const someMessage = document.querySelector('#someMessage');
const cardOne = document.querySelector('#cardOne');
const cardTwo = document.querySelector('#cardTwo');

button.addEventListener('click', drawCard);
startButton.addEventListener('click', startGameNow);

function startGameNow() {
    if (startGame === false || hasBlackJack ===true) {
        startGame = true;
        hasBlackJack = false;
        showLabel.innerHTML = "0";
        cardOne.innerHTML = "Card1: ";
        cardTwo.innerHTML = "Card2: ";
        someMessage.innerHTML = "Draw a card to start playing";
    }
}
function drawCard() {
    if(startGame === true && hasBlackJack === false) {
        insideFunction();
    } 

    insideFunction = () => {
        const CardNum = [1,2,3,4,5,6,7,8,9,10,11];
        const ranNum = Math.floor(Math.random() * 10) + 1;
        answer = CardNum[ranNum];
        const CardNum2 = [1,2,3,4,5,6,7,8,9,10];
        const ranNum2 = Math.floor(Math.random() * 9) + 1;
        answer2 = CardNum2[ranNum2];
        cardOne.innerHTML = "Card1: " + answer;
        cardTwo.innerHTML = "Card2: " + answer2;
        cardAdd = answer + answer2;

        if (cardAdd <= 20) {
            message = " Do you want to draw a new card?";
            showLabel.innerHTML = "Sum: " + cardAdd;
            someMessage.innerHTML = message;
        } else if (cardAdd === 21) {
            message = "Wohoo! You've got a blackJack, StartGame again?";
            hasBlackJack = true;
            showLabel.innerHTML = "Sum: " + cardAdd;
            someMessage.innerHTML = message;
        } else {
            message = "Your out of the game";
            showLabel.innerHTML = "Sum: " + cardAdd;
            someMessage.innerHTML = message;
        }
    }
}



// my old game code lel, 
// let hasBlackJack = false;
// let startGame = false;
// const button = document.querySelector('#btn');
// const startButton = document.querySelector('#btn-second');
// const showLabel = document.querySelector('#showLabel');
// const someMessage = document.querySelector('#someMessage');
// const cardOne = document.querySelector('#cardOne');
// const cardTwo = document.querySelector('#cardTwo');

// button.addEventListener('click', drawCard);
// startButton.addEventListener('click', startGameNow);

// function startGameNow() {
//     if (startGame === false) {
//         startGame = true;
//         someMessage.innerHTML = "Draw a card to start playing";
//     }
// }
// function drawCard() {
//     if(startGame === true ){
//     const CardNum = [1,2,3,4,5,6,7,8,9,10,11];
//     const ranNum = Math.floor(Math.random() * 10) + 1;
//     answer = CardNum[ranNum];
//     const CardNum2 = [1,2,3,4,5,6,7,8,9,10];
//     const ranNum2 = Math.floor(Math.random() * 9) + 1;
//     answer2 = CardNum2[ranNum2];
//     cardOne.innerHTML = "Card1: " + answer;
//     cardTwo.innerHTML = "Card2: " + answer2;
//     cardAdd = answer + answer2;

//     if (cardAdd <= 20) {
//         message = " Do you want to draw a new card?";
//         showLabel.innerHTML = "Sum: " + cardAdd;
//         someMessage.innerHTML = message;
//     } else if (cardAdd === 21) {
//         message = "Wohoo! You've got a blackJack";
//         hasBlackJack = true;
//         showLabel.innerHTML = "Sum: " + cardAdd;
//         someMessage.innerHTML = message;
//     } else {
//         message = "Your out of the game";
//         showLabel.innerHTML = "Sum: " + cardAdd;
//         someMessage.innerHTML = message;
//     }
// } else {
//     return null;
// }
//     if(cardAdd===21) {
//         startGame = false;
//     }
// }

