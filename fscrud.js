const fs = require("fs")
fs.writeFileSync("textfile/apple.txt","This is a Fruit");

fs.writeFileSync("textfile/banana.txt","This is a Fruit")

fs.unlinkSync("textfile/banana.txt")
fs.writeFileSync("textfile/banana.txt","This is a Fruit")
fs.unlinkSync("textfile/banana.txt")

const data = fs.readFileSync("textfile/apple.txt","utf-8")

console.log(data);

