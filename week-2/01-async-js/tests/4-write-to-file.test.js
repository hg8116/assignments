const fs = require("fs")
jest.mock("fs")

test("writeToFile writes data to a file and logs a success message", () => {
  console.log = jest.fn()

  fs.writeFile.mockImplementation((path, data, callback) => {
    callback(null)
  })

  const writeToFile = require("../easy/4-write-to-file")
  writeToFile("../easy/write-test.txt", "Hello World!")

  expect(fs.writeFile).toHaveBeenCalledWith(
    "../easy/write-test.txt",
    "Hello World!",
    expect.any(Function)
  )
  expect(console.log).toHaveBeenCalledWith("The file has been saved!")
})
