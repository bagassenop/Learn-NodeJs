// Import 'path' module using require() method:
const path = require("path");

// Assigning a path to the myPath variable
const myPath = "D:/Test NodeJs/NodeJs/NodeJSTutpath.js";

const pathInfo = {
  fileName: path.basename(myPath),
  folderName: path.dirname(myPath),
  fileExtension: path.extname(myPath),
  absoluteOrNot: path.isAbsolute(myPath),
  detailInfo: path.parse(myPath),
};

console.log(pathInfo);
