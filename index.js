import { add } from "./custom.mod.js";
import http from "node:http";
import express from "express";


const app = express();
//const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/" && req.method === "GET") {
//     res.write("Welcome to the Home Page!");
//     res.end();
//   } else if (req.url === "/about" && req.method === "GET") {
//     res.write("About Page");
//     res.end();
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("Page Not Found");
//   }
// });
// Reading a file synchronously
// const fa = require("fs");

// const data = fa.readFileSync("data.txt", "utf8");
// console.log(data);

//Reading a file asynchronously
// const fn = require("fs");
// fn.readFile("data.txt", "utf8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log("This is reading a file asynchronously");
//   console.log(data);
// });

//Reading a File Using Promises

// const fs = require("fs/promises");

// async function readFile() {
//   const data = await fs.readFile("data.txt", "utf8");
//   console.log(data);
// }readFile();

app.get("/", (req, res) => {
  res.send("Hello my name is Harmandeep kaur.");
});

const result = add(5, 3);
console.log(`The sum is: ${result}`);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
