const wait = require("../hard (promises)/1-promisify-setTimeout")

jest.useFakeTimers()

describe("wait", () => {
  it("should resolve after n seconds", () => {
    const promise = wait(3)
    jest.advanceTimersByTime(3000)
    return expect(promise).resolves.toBe("Done after 3 seconds")
  })
})
