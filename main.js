
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






