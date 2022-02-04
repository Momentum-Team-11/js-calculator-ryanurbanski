
console.log('javascript is connected and running!!')

// GLOBAL VARIABLES
let workingString = ""
let displayString = ""

// DISPLAY BOX ----------------------------------------------------------------------------------------
let displayBox = document.getElementById("display-box")

//change the string for display object
displayBox.innerHTML = workingString                    // test to makes sure I can change the value

// BUTTON EVENT LISTENERS ------------------------------------------------------------------------------
// 1
let oneBox = document.getElementById('1-box')                           // assign a value for '1-box' 
console.log(oneBox)
console.log(oneBox.innerHTML)

oneBox.addEventListener('click', function() {
    console.log('Box ' + oneBox.innerHTML + ' was clicked!')                  // Button 1 pressed
    
    workingString += oneBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 2
let twoBox = document.getElementById('2-box')                            // assign a value for '2-box'
console.log(twoBox)
console.log(twoBox.innerHTML)

twoBox.addEventListener('click', function() {
    console.log('Box ' + twoBox.innerHTML + ' was clicked!')                  // Button 1 pressed
    workingString += twoBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 3
let threeBox = document.getElementById('3-box')                           // assign a value for '3-box' 
console.log(threeBox)
console.log(threeBox.innerHTML)

threeBox.addEventListener('click', function() {
    console.log('Box ' + threeBox.innerHTML + ' was clicked!')                  // Button 3 pressed
    
    workingString += threeBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 4
let fourBox = document.getElementById('4-box')                           // assign a value for '4-box' 
console.log(fourBox)
console.log(fourBox.innerHTML)

fourBox.addEventListener('click', function() {
    console.log('Box ' + fourBox.innerHTML + ' was clicked!')                  // Button 4 pressed
    
    workingString += fourBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 5
let fiveBox = document.getElementById('5-box')                           // assign a value for '5-box' 
console.log(fiveBox)
console.log(fiveBox.innerHTML)

fiveBox.addEventListener('click', function() {
    console.log('Box ' + fiveBox.innerHTML + ' was clicked!')                  // Button 5 pressed
    
    workingString += fiveBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 6
let sixBox = document.getElementById('6-box')                           // assign a value for '6-box' 
console.log(sixBox)
console.log(sixBox.innerHTML)

sixBox.addEventListener('click', function() {
    console.log('Box ' + sixBox.innerHTML + ' was clicked!')                  // Button 6 pressed
    
    workingString += sixBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 7
let sevenBox = document.getElementById('7-box')                           // assign a value for '7-box' 
console.log(sevenBox)
console.log(sevenBox.innerHTML)

sevenBox.addEventListener('click', function() {
    console.log('Box ' + sevenBox.innerHTML + ' was clicked!')                  // Button 7 pressed
    
    workingString += sevenBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 8
let eightBox = document.getElementById('8-box')                           // assign a value for '8-box' 
console.log(eightBox)
console.log(eightBox.innerHTML)

eightBox.addEventListener('click', function() {
    console.log('Box ' + eightBox.innerHTML + ' was clicked!')                  // Button 8 pressed
    
    workingString += eightBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 9
let nineBox = document.getElementById('9-box')                           // assign a value for '9-box' 
console.log(nineBox)
console.log(nineBox.innerHTML)

nineBox.addEventListener('click', function() {
    console.log('Box ' + nineBox.innerHTML + ' was clicked!')                  // Button 9 pressed
    
    workingString += nineBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// 0
let zeroBox = document.getElementById('0-box')                           // assign a value for '0-box' 
console.log(zeroBox)
console.log(zeroBox.innerHTML)

zeroBox.addEventListener('click', function() {
    console.log('Box ' + zeroBox.innerHTML + ' was clicked!')                  // Button 0 pressed
    
    workingString += zeroBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// .
let dotBox = document.getElementById('.-box')                           // assign a value for '.-box' 
console.log(dotBox)
console.log(dotBox.innerHTML)

dotBox.addEventListener('click', function() {
    console.log('Box ' + dotBox.innerHTML + ' was clicked!')                  // Button . pressed
    
    workingString += dotBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// +
let addBox = document.getElementById('add-box')                            // assign a value for 'add-box'
console.log(addBox)
console.log(addBox.innerHTML)

addBox.addEventListener('click', function() {
    console.log('Box ' + addBox.innerHTML + ' was clicked!')                  // Button + pressed
    workingString += addBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// -
let subBox = document.getElementById('sub-box')                            // assign a value for 'sub-box'
console.log(subBox)
console.log(subBox.innerHTML)

subBox.addEventListener('click', function() {
    console.log('Box ' + subBox.innerHTML + ' was clicked!')                  // Button - pressed
    workingString += subBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// *
let multBox = document.getElementById('mult-box')                            // assign a value for 'mult-box'
console.log(multBox)
console.log(multBox.innerHTML)

multBox.addEventListener('click', function() {
    console.log('Box ' + multBox.innerHTML + ' was clicked!')                  // Button * pressed
    workingString += multBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// /
let divBox = document.getElementById('div-box')                            // assign a value for 'div-box'
console.log(divBox)
console.log(divBox.innerHTML)

divBox.addEventListener('click', function() {
    console.log('Box ' + divBox.innerHTML + ' was clicked!')                  // Button / pressed
    workingString += divBox.innerHTML
    console.log('The value of working string is now: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// C
let cBox = document.getElementById('C-box')                            // assign a value for 'C-box'
console.log(cBox)
console.log(cBox.innerHTML)

cBox.addEventListener('click', function() {
    console.log('Box ' + cBox.innerHTML + ' was clicked!')                  // Button C pressed
    workingString = ''                                                          // workingString reset
    console.log('The value of working string is now: ' + workingString)     
    displayBox.innerHTML = workingString                                    // Update display box
})

// =
let eBox = document.getElementById('E-box')                            // assign a value for 'E-box'
console.log(eBox)
console.log(eBox.innerHTML)

eBox.addEventListener('click', function() {
    console.log('Box ' + eBox.innerHTML + ' was clicked!')                  // Button E pressed
    displayString = workingString                                                           // Write a function to parse and evaluate  
    console.log('The final value of the working string is : ' + workingString)     
    console.log('This string will get convered into a value for the final display.')

    displayString = eval(workingString)
    console.log('The product of all these should be:  ******  ' + displayString + '  ******')

    displayBox.innerHTML = displayString
})






