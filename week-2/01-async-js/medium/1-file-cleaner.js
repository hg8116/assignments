/*
## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```
*/

const fs = require("fs")

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (err, data) => {
      if (err) reject(err)
      resolve(data)
    })
  })
}

function writeFile(path, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, content, (err) => {
      if (err) reject(err)
      else resolve("This file has been updated!")
    })
  })
}

function cleanFile(path) {
  readFile(path)
    .then((data) => {
      console.log(data)
      let cleanData = data.replace(/\s+/g, " ").trim()
      return writeFile(path, cleanData)
    })
    .then((message) => console.log(message))
    .catch((err) => console.log(err))
}

cleanFile("file-clean.txt")

module.exports = cleanFile
