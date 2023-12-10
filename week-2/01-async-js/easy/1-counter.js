/*
## Create a counter in JavaScript

We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript
It should go up as time goes by in intervals of 1 second
*/

function counter(n) {
  let count = 0
  const countInterval = setInterval(() => {
    count++
    console.log(count)

    if (count === n) {
      clearInterval(countInterval)
      console.log("Done!")
    }
  }, 1000)
}

counter(5)

module.exports = counter
