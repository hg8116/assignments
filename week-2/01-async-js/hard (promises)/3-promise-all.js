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
  return Promise.all([
    waitOneSecond(),
    waitTwoSecond(),
    waitThreeSecond(),
  ]).then((res) => {
    console.log(
      res[0],
      res[1],
      res[2],
      "All 3 promises resolved in",
      Date.now() - start,
      "ms"
    )
    return [
      res[0],
      res[1],
      res[2],
      "All 3 promises resolved in",
      Date.now() - start,
      "ms",
    ]
  })
}

calculateTime()

module.exports = {
  calculateTime,
  waitOneSecond,
  waitTwoSecond,
  waitThreeSecond,
}
