
console.log('javascript is connected and running!!')

// GLOBAL VARIABLES
let workingString = ""

// Message Box
let messageBox = document.getElementById("M-box")

// 1
let oneBox = document.getElementById('1-box')    
oneBox.addEventListener('click', function() {
    console.log('Box ' + oneBox.innerHTML + ' was clicked!')                  // Button 1 pressed
    workingString += oneBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 2
let twoBox = document.getElementById('2-box')  
twoBox.addEventListener('click', function() {
    console.log('Box ' + twoBox.innerHTML + ' was clicked!')                  // Button 1 pressed
    workingString += twoBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 3
let threeBox = document.getElementById('3-box')     
threeBox.addEventListener('click', function() {
    console.log('Box ' + threeBox.innerHTML + ' was clicked!')                  // Button 3 pressed
    workingString += threeBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 4
let fourBox = document.getElementById('4-box')     
fourBox.addEventListener('click', function() {
    console.log('Box ' + fourBox.innerHTML + ' was clicked!')                  // Button 4 pressed
    workingString += fourBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 5
let fiveBox = document.getElementById('5-box')    
fiveBox.addEventListener('click', function() {
    console.log('Box ' + fiveBox.innerHTML + ' was clicked!')                  // Button 5 pressed
    workingString += fiveBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 6
let sixBox = document.getElementById('6-box')    
sixBox.addEventListener('click', function() {
    console.log('Box ' + sixBox.innerHTML + ' was clicked!')                  // Button 6 pressed
    workingString += sixBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 7
let sevenBox = document.getElementById('7-box')                  
sevenBox.addEventListener('click', function() {
    console.log('Box ' + sevenBox.innerHTML + ' was clicked!')                  // Button 7 pressed
    workingString += sevenBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 8
let eightBox = document.getElementById('8-box')                 
eightBox.addEventListener('click', function() {
    console.log('Box ' + eightBox.innerHTML + ' was clicked!')                  // Button 8 pressed
    workingString += eightBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 9
let nineBox = document.getElementById('9-box')                 
nineBox.addEventListener('click', function() {
    console.log('Box ' + nineBox.innerHTML + ' was clicked!')                  // Button 9 pressed
    workingString += nineBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// 0
let zeroBox = document.getElementById('0-box')                
zeroBox.addEventListener('click', function() {
    console.log('Box ' + zeroBox.innerHTML + ' was clicked!')                  // Button 0 pressed
    workingString += zeroBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// .
let dotBox = document.getElementById('.-box')               
dotBox.addEventListener('click', function() {
    console.log('Box ' + dotBox.innerHTML + ' was clicked!')                  // Button . pressed
    workingString += dotBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// +
let addBox = document.getElementById('add-box')            
addBox.addEventListener('click', function() {
    console.log('Box ' + addBox.innerHTML + ' was clicked!')                  // Button + pressed
    let lastLetter = workingString.charAt(workingString.length - 1)
    if ((lastLetter !== "+") && (lastLetter !== "-") && (lastLetter !== "*") &&  (lastLetter !== "/")) {
        workingString += addBox.innerHTML
    }
    console.log('The value of working string is now: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// -
let subBox = document.getElementById('sub-box')              
subBox.addEventListener('click', function() {
    console.log('Box ' + subBox.innerHTML + ' was clicked!')                  // Button - pressed
    workingString += subBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// *
let multBox = document.getElementById('mult-box')         
multBox.addEventListener('click', function() {
    console.log('Box ' + multBox.innerHTML + ' was clicked!')                  // Button * pressed
    workingString += multBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// /
let divBox = document.getElementById('div-box')          
divBox.addEventListener('click', function() {
    console.log('Box ' + divBox.innerHTML + ' was clicked!')                  // Button / pressed
    workingString += divBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// C
let cBox = document.getElementById('C-box')             
cBox.addEventListener('click', function() {
    console.log('Box ' + cBox.innerHTML + ' was clicked!')                  // Button C pressed
    workingString = ''                                                          // workingString reset
    console.log('The value of working string is now: ' + workingString)     
    messageBox.innerHTML = workingString                                    // Update display box
})

// =
let eBox = document.getElementById('E-box')            
eBox.addEventListener('click', function() {
    console.log('Box ' + eBox.innerHTML + ' was clicked!')                              // Button E pressed
    displayString = workingString                                                           // Write a function to parse and evaluate  
    console.log('The final value of the working string is : ' + workingString)     
    console.log('This string will get convered into a value for the final display.')

    workingString = eval(workingString)
    console.log('The product of all these should be:  ******  ' + displayString + '  ******')

    messageBox.innerHTML = workingString
})

// Unfinished. Not super necessary
function validate(workingString, currentOperator) {
    let lastLetter = workingString.charAt(workingString.length - 1)

    if ((lastLetter !== "+") && (lastLetter !== "-") && (lastLetter !== "*") && (lastLetter !== "/") &&  (lastLetter !== "/")) {
        workingString += addBox.innerHTML
    }

    if (lastLetter.isInteger) {

    }
}




