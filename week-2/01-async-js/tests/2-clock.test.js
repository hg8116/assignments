const {
  clockUsingSetInterval,
  clockUsingSetTimeout,
} = require("../medium/2-clock")

jest.useFakeTimers()

describe("clockUsingSetInterval", () => {
  it("should log the time every second", () => {
    const consoleSpy = jest.spyOn(console, "log")
    clockUsingSetInterval(5)
    jest.advanceTimersByTime(5000)
    expect(consoleSpy).toHaveBeenCalledTimes(6) // 5 times for each second, and once for "Clock stopped"
    consoleSpy.mockRestore()
  })
})

describe("clockUsingSetTimeout", () => {
  it("should log the time every second", () => {
    const consoleSpy = jest.spyOn(console, "log")
    clockUsingSetTimeout(5)
    jest.advanceTimersByTime(5000)
    expect(consoleSpy).toHaveBeenCalledTimes(6) // 5 times for each second, and once for "Clock stopped"
    consoleSpy.mockRestore()
  })
})
