console.log("Hello, World!");

const myName = "Jacob";
// console.log("My name is", myName);
/* The above code demonstrates the use of the console */
/* I write my comment and then highlight and 
command */


let height = 200;
height = 100;
// reassigning the variable height a new value
// console.log("Height in line 13 is: ", height);

height = 300;
// reassigning the variable height a new value
// console.log("Height in line 16 is: ", height);
// the variable height retains the last value it was assigned

let score
score = 0;
// semicolons at the end of lines are optional
//score is 0
score = score + 1;
// score is 1
score = score + 1;
// score is 2
score = 0;
// score is 0 again
score += 1;
// score is 1
score += 1;
// score is 2
score *= 2;
//score is 4
score++;
// score is 5 (goes up by 1)

// let's start again with a soccer game
liverpoolScore = 0;
afcRichmondScore = 0;
let timeRemaining = 90;
// while loop
while (timeRemaining) {
    //as long as timeRemaining > 0, i.e. it evaluates to true the code in the {} will execute
    let whoJustScored

    whoJustScored = prompt("Who just scored")

    if (whoJustScored === "Liverpool") {
        liverpoolScore++
    }

    else if (whoJustScored === "Richmond") {
        afcRichmondScore++
    }
    console.log("Liverpool's score is: ", liverpoolScore)
    console.log("Richmond's score is: ", afcRichmondScore)
    timeRemaining -= 10;
    console.log("Time remaining is: ", timeRemaining)
}
console.log('Game Over')



let myValue = null

if (myValue) {
    /* if the value in () is falsy (evaluates to false), the statements in the {} won't execute. If the value in () is truthy (evaluates to true), the statements in {} will execute */
    console.log("My value: ", myValue)
} else {
    console.log("myValue is falsy")
}
// and
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false
// or
// true || true -> true
// true || false -> true
// false || true -> true
// false || false -> false
// ! means 'not' or 'the opposite of
// !true -> false