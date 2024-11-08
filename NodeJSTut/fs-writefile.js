const fs = require("fs");

const data = "Hi, this is first data for newFile.txt";

// // Will always overwrite the data of the file
// fs.writeFile("./myFolder/myFile.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Written to file successfully!");
//   }
// });

// Will append the data of the file because of parameter {flah: 'a'}
fs.writeFile("./myFolder/myFile.txt", data, { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Written to file successfully!");
  }
});
