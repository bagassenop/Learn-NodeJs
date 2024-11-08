const fs = require("fs");

fs.readdir("./MyFolder", (err, files) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Directory read successfully! Here are the files:");
  console.log(files);
});
