const randomHexDisplay = document.querySelector('.hex-code-display')
const body = document.querySelector('body')
const hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']; 
const randomNumber = function(max) {
    return Math.floor(Math.random() * max) + 1;
}
const randomHexValue = function() {
    let hexValueNumber = randomNumber(15)
    let randomHexValue = hexValues[hexValueNumber]
    return randomHexValue
}
const getRandomHexCode = function() {
    let hexCode = '#'
    for (let i = 1; i <= 6; i++) {
        let hexVal = randomHexValue();
        hexCode += hexVal
    }
    return hexCode
}
const changeHex = function() {
    let randomHex = getRandomHexCode();
    randomHexDisplay.innerText = randomHex
    body.style.backgroundColor = randomHex

}

changeHex()
body.addEventListener('click', changeHex)



