// show today's date
// format dayJS
// get today's date in the right format and save it to variable
// console.log variable

const div = document.querySelector('#currentDay')
console.log(div)
const today = dayjs().format('dddd, MMMM D, YYYY')
console.log(today)

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

// use dayJS to get current hour and store that in a variable 

// const divs = document.querySelectorAll('.py-3') 
// this is an array

// for loop
    // get inner text from each div
    // compare that to the current hour (if statement)
        // .setAttribute('class', 'row time-block past')
    // if inner text is equal to the current hour
        //.setAttribute('class', 'row time-block present')
    // if inner text is ahead of current hour
        //.setAttribute('class', 'row time-block future')
    
// save things in localstorage
//get value from text input
//save to local storage (also save the time as an object)