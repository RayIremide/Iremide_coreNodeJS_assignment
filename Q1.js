const path  = require("path")
const process = require("process")
const os = require("os")

// Print out the CWD//
const cwd = path.resolve()
// console.log(cwd)

// Print out the separator//
const printSep = path.sep
// console.log(printSep)

// Print out the extension name//
const printExt = path.extname("C:\Users\IREMIDE\Desktop\altSchool\Iremide Assignment\Q1.js")
// console.log(printExt)

// Print out the process id//
const printId = process.pid
// console.log(printId)

// Print out the User info of os//
const printUser = os.userInfo()
// console.log(printUser)

// Print out the platform//
const printPlatform = os.platform()
console.log(printPlatform)
