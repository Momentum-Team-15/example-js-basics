console.log("connected")


const not_contacted = ['Mo', 'Trent', 'Rachel', 'Rondale', 'Peri']
let contacted = []


// write a loop that console logs "Emailed <name> for each person"
// remove that person from the copy of the original array and put them in the `contacted` array

// If you are going to modify an array, make a copy of it and modify that.
let not_contacted_copy = not_contacted.slice()
// could also use the spread operator [...]

for (let i = 0; i < not_contacted.length; i++) {
    console.log("i is: ", i)
    // console.log("Emailed ", not_contacted[i])
    let person = not_contacted_copy.shift()
    console.log("Emailed ", person)
    contacted.push(person)
    console.log("Contacted: ", contacted)
}


