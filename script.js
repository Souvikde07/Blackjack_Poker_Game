let player = {
    name: "Souvik",
    chips: 200
    //sayHello: function(){ Functions attached to objects are called methods.
      //  console.log("Hello World")
    //}
}
// player.sayHello()
let sum = 0
let cards = []
console.log(cards,sum)
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = getRandomCard() 
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    console.log(cards,sum)
    renderGame()
}

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 //random number from 2 - 11
    if (randomNumber === 1) {
        return 11
    } else if(randomNumber >= 10){
        return 10
    } else {
        return randomNumber
    }
}

function renderGame() {
    cardEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum : " + sum
    if(sum <= 20 ){
        message = "Do you want to draw a new card"
    } else if(sum === 21){
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    if (isAlive == true && hasBlackJack == false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }else {
        console.log("You are out/won so no cards drawn!!!")
    }
}