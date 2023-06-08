let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
console.log(sum)
let hasBlackJack = false
let isAlive = true
let message = " "
let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

function startGame() {
    cardEl.textContent = "Cards : "+ firstCard + " " + secondCard
    sumEl.textContent += sum
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

function newCard(){
    console.log("drawing a new card out from the deck")
}

