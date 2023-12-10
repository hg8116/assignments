const fs = require("fs")
const cleanFile = require("../medium/1-file-cleaner")

jest.mock("fs")

describe("cleanFile", () => {
  it("should remove extra spaces and trim the content", async () => {
    const data = "hello     world    my    name   is       raman"
    const cleanedData = "hello world my name is raman"

    fs.readFile.mockImplementation((path, encoding, callback) => {
      callback(null, data)
    })

    fs.writeFile.mockImplementation((path, data, callback) => {
      callback(null)
    })

    await cleanFile("../medium/file-clean.txt")

    expect(fs.readFile).toHaveBeenCalledWith(
      "../medium/file-clean.txt",
      "utf-8",
      expect.any(Function)
    )
    expect(fs.writeFile).toHaveBeenCalledWith(
      "../medium/file-clean.txt",
      cleanedData,
      expect.any(Function)
    )
  })
})
