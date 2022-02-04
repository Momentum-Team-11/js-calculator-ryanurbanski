
console.log('javascript is connected and running!!')

// Define the workings strings I'll need to compute and display
// the calculations
let workingString = ""
let displayString = ""

let displayObject = document.getElementById("display-box-text")
console.log(displayObject)                                           // show whole object
console.log(displayObject.innerHTML)                                  //Show the current text of this Object

//change the string for display object
displayObject.innerHTML = "New string is working!!"

// BUTTON EVENT LISTENERS
let oneBox = document.getElementById('1-box')                           // assign a value for '1-box' 
console.log(oneBox)
console.log(oneBox.innerHTML)

oneBox.addEventListener('click', function() {
    console.log('Box ' + oneBox.innerHTML + ' was clicked!')                  // Button 1 pressed
    workingString += oneBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
})

let twoBox = document.getElementById('2-box')                            // assign a value for '2-box'
console.log(twoBox)
console.log(twoBox.innerHTML)

twoBox.addEventListener('click', function() {
    console.log('Box ' + twoBox.innerHTML + ' was clicked!')                  // Button 1 pressed
    workingString += twoBox.innerHTML
    console.log('The value of working string is: ' + workingString)     
})












