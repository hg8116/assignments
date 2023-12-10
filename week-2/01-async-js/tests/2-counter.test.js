const counter = require("../easy/2-counter")

jest.useFakeTimers()

test('counter counts up to the given number and logs "Done!"', () => {
  console.log = jest.fn()

  counter(5)

  // Fast-forward until all timers have been executed
  jest.runAllTimers()

  // Check the results
  expect(console.log).toHaveBeenCalledTimes(6)
  expect(console.log).toHaveBeenCalledWith(1)
  expect(console.log).toHaveBeenCalledWith(2)
  expect(console.log).toHaveBeenCalledWith(3)
  expect(console.log).toHaveBeenCalledWith(4)
  expect(console.log).toHaveBeenCalledWith(5)
  expect(console.log).toHaveBeenCalledWith("Done!")
})
