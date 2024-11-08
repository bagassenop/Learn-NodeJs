// // __dirname Global Variable
// console.log(__dirname);

// // __filename Global Variable
// console.log(__filename);

// // Define a global variable in NodeJS
// global.myVariable = "Hello World";

// // Access the global variable
// console.log(myVariable); // Output: Hello World

// const sayHello = require("./modules/hello.js");

// sayHello("John");
// sayHello("Peter");
// sayHello("Jek");
const http = require("http");
const fs = require("fs");

// Geet the contents of the HTML, CSS, JS and Logo Files
const homePage = fs.readFileSync("./navbar-app/index.html");
const homeStyles = fs.readFileSync("./navbar-app/styles.css");
const homeLogo = fs.readFileSync("./navbar-app/logo.svg");
const homeLogic = fs.readFileSync("./navbar-app/browser-app.js");

// Creating Server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  } else if (req.url === "/styles.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  } else if (req.url === "/browser-app.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  } else if (req.url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeLogo);
    res.end();
  } else if (req.url === "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>About Page</h1>");
    res.end();
  } else if (req.url === "/contact") {
    // res.end("This is my Contact Page");
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h1>Contact Page</h1>");
    res.end();
  } else {
    // res.end("404, Resource Not Found");
    res.writeHead(404, { "content-type": "text/html" });
    res.write('<h1>404, Resource Not Found <a href="/">Go Back Home</a></h1>');
    res.end();
  }
});

server.listen(5000, () => {
  console.log("Server listening to port 5000");
});
