const { calculateTime } = require("../hard (promises)/3-promise-all")

jest.useFakeTimers()

describe("calculateTime", () => {
  it("should wait for all promises to resolve", () => {
    const consoleSpy = jest.spyOn(console, "log")
    calculateTime()
    jest.advanceTimersByTime(1000)
    expect(consoleSpy).toHaveBeenCalledTimes(4)
    consoleSpy.mockRestore()
  })
})
