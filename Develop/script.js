
const div = document.querySelector('#currentDay')

// obtain today's date and format dayJS to save in a variable
const today = dayjs().format('dddd, MMMM D, YYYY')

// use dayJS to get current hour and store that in a variable 
const hour = dayjs().format('H')

// obtain all divs that have time-block class
const timeBlocks = document.querySelectorAll('.time-block')

// create element and display today's date by appending to the currentDay div
const displayDate = () => {
    
const h3 = document.createElement('h3')
h3.innerText = today
div.appendChild(h3)

}
  
displayDate()

// get id for each hour block and compare that to current hour to color code each hour block
const setBlockColor = () => {

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

// save text entries in local storage
const textEntry = () => {
    $('.saveBtn').on('click', function() {
      const key = $(this).parent().attr('id')
      const value = $(this).siblings('.description').val()
      localStorage.setItem(key, value)
    })
  }

// retrieve text entries from local storage when page is refreshed
$('.time-block').each(function() {
    const key = $(this).attr('id')
    const value = localStorage.getItem(key)
    $(this).children('.description').val(value)
  })

  textEntry()