const fs = require("fs");

try {
  // Write file synchronously
  fs.writeFileSync("./myFolder/myFileSync.txt", "myFileSync says Hi");
  console.log("Write operation Successful");

  // Read file synchronously
  const fileData = fs.readFileSync("./myFolder/myFileSync.txt", "utf-8");
  console.log("Read operation successful. Here is the data:");
  console.log(fileData);
} catch (error) {
  console.log("Error occurred!");
  console.log(err);
}
