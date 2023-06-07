let firstCard = Math.floor(Math.random() * 10) + 2
let secondCard = Math.floor(Math.random() * 10) + 2
let sum = firstCard + secondCard
console.log(sum)
let hasBlackJack = false
let isAlive = true
let message = " "
if(sum <= 20 ){
    message = "Do you want to draw a new card"
} else if(sum === 21){
    message = "Wohoo! You've got Blackjack!"
    hasBlackJack = true
} else {
    message = "You're out of the game!"
    isAlive = false
}

// CASH OUT
console.log(message)
console.log(hasBlackJack)
console.log(isAlive)
