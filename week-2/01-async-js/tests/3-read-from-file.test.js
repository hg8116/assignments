const fs = require("fs")
jest.mock("fs")

test("readFile reads a file and logs its contents", () => {
  console.log = jest.fn()

  const data = "file contents"
  fs.readFile.mockImplementation((path, encoding, callback) => {
    callback(null, data)
  })

  const readFile = require("../easy/3-read-from-file")
  readFile("../easy/read-test.txt")

  expect(fs.readFile).toHaveBeenCalledWith(
    "../easy/read-test.txt",
    "utf8",
    expect.any(Function)
  )
  expect(console.log).toHaveBeenCalledWith(data)
  expect(console.log).toHaveBeenCalledWith("hello world")
})
