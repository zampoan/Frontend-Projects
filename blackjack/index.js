let hasBlackjack = false 
let cards = []
let isAlive = false
let sum = 0
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el") // more dynamic than getElementId
let playerEl = document.querySelector("#player-el")
let player = {
    name: "My",
    chips: 100
}


function getRandomCard() {
    let a = Math.floor(Math.random() * 12) + 1
    if (a=== 1) {
        return 11;
    } else if (a > 10)
        return 10;
    else {
        return a
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    if (sum === 21) {
        message = "You are the winner!"
        hasBlackjack = true
        player['chips'] += 10
    
    } else if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else {
        message = "You're out of this game!"
        isAlive = false
        player['chips'] -= 10
    }

    // Display message
    messageEl.textContent = message
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum

    playerEl.textContent = player['name'] + " chips: $" + player['chips']
    
}

function drawNewCard() {
    if (isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}