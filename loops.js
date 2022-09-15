// let sign

// //as long as not entering pisces, keep going
// // keep going until someone enters pisces
// while (sign !== 'pisces') {
//     // you can put an if/else inside a while loop
//     if (sign === 'aquarius') {
//         console.log("That's closer.")
//     } else {
//         console.log("I really wish you were a Pisces.")
//     }
//     // if the condition is met, do the stuff in the curly braces
//     // one more time, else go to the next line after the closing curly brace
//     sign = prompt("What's your sign").toLowerCase()
// }
// // someone entering 'pisces' causes the loop to stop
// console.log("Hello, Pisces")

let answer = "yes"

// while (answer !== 'no') {
//     // until the user enters 'no'
//     console.log(answer)
//     if (answer !== 'yes') {
//         // check if the user answered 'yes' or some other nonsense. In the case of other nonsense, remind the user to type yes or no
//         answer = prompt("Please enter yes or no")
//     } else {
//         // if the user entered 'yes' correctly, show the prompt again
//         answer = prompt("Do you want me to ask again?")
//     }
// }
// for loop
// let smiles = '😄'
// for (let i = 30; i >= 0; i--) {
//     // i is going to start at one and go up by one until it gets to 5. Before incrementing i up by 1, the code below will execute.
//     console.log("Value of i is: " + i + " You are awesome!  " + smiles)
//     smiles += '😄'
// }

/* arrays are indicated by square brackets with elements 
separated by commas*/
// with arrays, we use for...of loops to perform the same
// action on each item in the array
let animals = ['🐶', '🦊', '🐞', '🐘', '🦦']

for (let animal of animals) {
    // for each single item in the array, do the stuff below
    console.log("I feel like a " + item + " today.")
}

let prices = [4, 5, 3, 1, 2, 5, 5]

let total = 0

for (let price of prices) {
    total += price
}
console.log("The price of your produce totals " + total + ' dollars')


