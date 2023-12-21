// show today's date
// format dayJS
// get today's date in the right format and save it to variable
// console.log variable

const div = document.querySelector('#currentDay')
console.log(div)
const today = dayjs().format('dddd, MMMM D, YYYY')
console.log(today)

// use dayJS to get current hour and store that in a variable 

const hour = dayjs().format('H:mm')
console.log(hour)

const divs = Array.from(document.querySelectorAll('.time-block')) 
console.log(divs)
// this is an array

// append to page
    // create an element
    // set the inner text to that variable I just made
    // append that to the currentDay div

const displayDate = () => {
    
const h3 = document.createElement('h3')
h3.innerText = today
div.appendChild(h3)

}
  
displayDate()

// for loop
    // get inner text from each div
for (let i = 0; i < divs.length; i++) {
    const innerText = divs[i].innerText
    console.log(innerText)

    if (innerText < hour) {
        divs.forEach(div => {
            div.setAttribute('class', 'row time-block past')
        })
    }
    else if (innerText === hour) {
        divs.forEach(div => {
            div.setAttribute('class', 'row time-block present')
        })
    }
    else {
        divs.forEach(div => {
            div.setAttribute('class', 'row time-block future')
        })
    }
}

    // compare that to the current hour (if statement)
        // .setAttribute('class', 'row time-block past')
    // if inner text is equal to the current hour
        //.setAttribute('class', 'row time-block present')
    // if inner text is ahead of current hour
        //.setAttribute('class', 'row time-block future')
    
// save things in localstorage
//get value from text input
//save to local storage (also save the time as an object)