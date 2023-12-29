// show today's date
// format dayJS
// get today's date in the right format and save it to variable
// console.log variable

const div = document.querySelector('#currentDay')
console.log(div)
const today = dayjs().format('dddd, MMMM D, YYYY')
console.log(today)

// use dayJS to get current hour and store that in a variable 

const hour = dayjs().format('H')
console.log(hour)

// obtain all divs that have time-block class
let timeBlocks = document.querySelectorAll('.time-block');

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

// get id for each hour block and compare that to current hour to color code each hour block

function setBlockColor() {

    timeBlocks.forEach(function(block) {
      let blockHour = parseInt(block.id)
      
      if (blockHour < hour) {
        block.classList.add('past')
        block.classList.remove('present', 'future')
      } else if (blockHour == hour) {
        block.classList.add('present')
        block.classList.remove('past', 'future')
      } else {
        block.classList.add('future')
        block.classList.remove('past', 'present')
      }
    })
  }
  

setBlockColor()
    
// save things in localstorage
//get value from text input
//save to local storage (also save the time as an object)