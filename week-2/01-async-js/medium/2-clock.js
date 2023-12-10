/**
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

function clockUsingSetInterval(n) {
  let count = 0
  const clockInterval = setInterval(() => {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    console.log(`Time from setInterval - ${hours}:${minutes}:${seconds}`)
    count++
    if (count === n) {
      clearInterval(clockInterval)
      console.log("Clock stopped (setInterval)!")
    }
  }, 1000)
}

function clockUsingSetTimeout(n) {
  let count = 0
  function clock() {
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    console.log(`Time from setTimeout - ${hours}:${minutes}:${seconds}`)
    count++
    if (count < n) {
      setTimeout(clock, 1000)
    } else {
      console.log("Clock stopped (setTimeout)! ")
    }
  }
  clock()
}

module.exports = { clockUsingSetInterval, clockUsingSetTimeout }
