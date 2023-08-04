const fs =require("fs")
const path = require("path")

// create folder students//
// const createFolder = path.join(__dirname, "Students")

// fs.mkdir(createFolder,(err,data)=>{
//  if (err){
//     console.log(`There is an error: ${err}`)
//     return
//  }
//     console.log("Folder created successfully")
// })


// create file user.js//
// const filePath = path.join(__dirname, "Students","user.js")
// const content = "Iremide Olatunji"
// fs.writeFile(filePath, content, (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("File created successfully")
// })

// Update Student directory to names//

// const oldFolderName = 'Students';
// const newFolderName = 'Names';

// fs.rename(oldFolderName, newFolderName, (err) => {
//   if (err) {
//     console.error('Error renaming folder:', err);
//   } else {
//     console.log('Folder name updated successfully!');
//   }
// });

// Add new info to user.js//
// const myInfo ={
//     age : 28,
//     sex: "Female",
//     nationality: "Nigerian",
//     phoneNumber: "09034750619",
//     hobby: "Swimming",
//     track: "Backend"
// }

// const filePath2 = path.join(__dirname, "Names","user.js")

// fs.appendFile(filePath2,JSON.stringify(myInfo) ,(err)=>{
//     if (err){
//         console.log(err)
//     }
//     console.log("Addition to file successful")
// })

// UPDATE FILE NAME//
// fs.rename(filePath2,"./Names/iremide_olatunji.js", (err) => {
//   if (err) {
//     console.error('Error renaming file:', err);
//   } else {
//     console.log('File name updated successfully!');
//   }
// });

// READ FILE//
// const filePath3 = path.join(__dirname, "Names","iremide_olatunji.js")

// fs.readFile(filePath3, 'utf8', (err, data) => {
//     if (err) {
//         console.log(`This is an error reading file ${err}`)
//         return
//     }
//     console.log(`This is the information in the file ${data}`)
// })

// DELETE FILE//
// fs.rm(filePath3, (err) => {
//     if (err) {
//         console.log(`This is an error deleting file ${err}`)
//         return
//     }
//     console.log(`File deleted successfully`)
// })

// DELETE FOLDER//
const filePath4 = path.join(__dirname, "Names")

fs.rmdir(filePath4,(err)=>{
    if (err){
        console.log(`This is an error deleting folder ${err}`)
        return
    }
    console.log(`Folder deleted successfully`)
})




