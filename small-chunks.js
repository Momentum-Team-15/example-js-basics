// take an array of colors
let renkler = ['red', 'blue', 'green', 'yellow', 'purple']

// write a loop that console logs "My favorite color is <color>." for every color
// for (let renk of renkler) {
//     // console.log("My favorite color is ", renk)
//     console.log(`My favorite color is ${renk}.`)
// }

let attendees = ['Beyoncé', 'Ryan', 'Blake', 'LeBron', 'Shaq', 'Neil', 'Morgan', 'Jack', 'Kevin']

// for (let person of attendees) {
//     alert(`Welcome to my party, ${person}!`)
//     // this is a template literal and it uses back ticks
// }

// tell js to find the part of the page where the guests will go
let guestList = document.querySelector("#guest-list")
// put the guest names in this empty box

for (let person of attendees) {
    let guestElement = document.createElement('p')
    // create a new element to put the guest name in

    let guestName = document.createTextNode(person)
    // create a text node with the name

    guestElement.appendChild(guestName)
    // put the guest name inside the p tag

    guestList.appendChild(guestElement)
    // finally put the p tag with the guest name on the page
}

