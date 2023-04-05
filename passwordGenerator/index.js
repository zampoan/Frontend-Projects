const lowCase = "abcdefghijklmnopqrstuvxyz";
const upCase = "ABCDEFGHIJKLMNOPQRSTUVXYZ";
const numbers = "0123456789";
const symbols = "$&()*+[]@#^-_!?";
let passwordEl = document.getElementById("password-output");
options = {
    upper: false,
    lower: true,
    numbers: false,
    symbols: false,
}

function getPasswordLength(){
    let passLength = document.getElementById("num-box").value
    return passLength
}

function randomLowCase(){
    let randElem = Math.floor(Math.random() * lowCase.length)
    return lowCase[randElem]
}

function randomUpCase() {
    let randElem = Math.floor(Math.random() * upCase.length)
    return upCase[randElem]
}

function randomNumber() {
    let randElem = Math.floor(Math.random() * numbers.length)
    return numbers[randElem]
}

function randomSymbol() {
    let randElem = Math.floor(Math.random() * symbols.length)
    return symbols[randElem]
}


function generatePassword() {
    let password = []
    for(let i = 0; i < getPasswordLength(); i++){
        if (document.getElementById("check-lower").checked){
            password.push(randomLowCase())
        }  
        if (document.getElementById("check-upper").checked){
            password.push(randomUpCase())
        }  
        if (document.getElementById("check-number").checked){
            password.push(randomNumber())
        }  
        if (document.getElementById("check-symbol").checked){
            password.push(randomSymbol())
        }  
    }

    password = password.join("")
    console.log(password)
    passwordEl.value = password
}
