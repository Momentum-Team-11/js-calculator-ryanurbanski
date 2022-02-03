
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

// set an eventlistener for the buttons
let oneBox = document.getElementById('1-box')                         // couldn't get querySelector() to work, but this got it done
console.log(oneBox)
console.log(oneBox.innerHTML)

oneBox.addEventListener('click', function() {
    console.log('Box ' + oneBox.innerHTML + ' was clicked!')
})




