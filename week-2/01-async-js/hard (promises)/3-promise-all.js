/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("waitOneSecond Completed")
    }, 1000)
  })
}

function waitTwoSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("waitTwoSecond Completed")
    }, 1000)
  })
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("waitThreeSecond Completed")
    }, 1000)
  })
}

function calculateTime() {
  let start = Date.now()
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (res) => {
      console.log("First Promise", res[0])
      console.log("Second Promise", res[1])
      console.log("Third Promise", res[2])
      console.log("All 3 promises resolved in", Date.now() - start, "ms")
    }
  )
}

module.exports = {
  calculateTime,
  waitOneSecond,
  waitTwoSecond,
  waitThreeSecond,
}
