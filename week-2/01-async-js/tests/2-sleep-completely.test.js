const sleep = require("../hard (promises)/2-sleep-completely")

describe("sleep", () => {
  it("should halt the JS thread for n seconds", async () => {
    const start = Date.now()
    await sleep(3)
    const end = Date.now()
    const duration = (end - start) / 1000
    expect(duration).toBeCloseTo(3, 1)
  })
})
