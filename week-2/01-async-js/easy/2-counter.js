/*
## Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/

function counter(n) {
  let count = 0
  function countTimeout() {
    setTimeout(() => {
      count++
      console.log(count)
      if (count < n) countTimeout()
      else console.log("Done!")
    }, 1000)
  }
  countTimeout()
}

counter(5)

module.exports = counter
