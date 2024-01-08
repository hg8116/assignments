/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require("fs")

function writeToFile(path, content) {
  fs.writeFile(path, content, (err) => {
    if (err) throw err
    console.log("The file has been saved!")
  })
}

writeToFile("write-test.txt", "Hello World!")

module.exports = writeToFile