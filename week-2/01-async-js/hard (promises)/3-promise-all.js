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
    }, 2000)
  })
}

function waitThreeSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("waitThreeSecond Completed")
    }, 3000)
  })
}

function calculateTime() {
  const startTime = Date.now()
  Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()]).then(
    (res) => {
      console.log(res)
      console.log("All 3 promises resolved in", Date.now() - startTime, "ms")
    }
  )
}

module.exports = {
  calculateTime,
  waitOneSecond,
  waitTwoSecond,
  waitThreeSecond,
}
