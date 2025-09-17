const fs = require("fs")
fs.writeFileSync("textfile/apple.txt","This is a Fruit");

fs.writeFileSync("textfile/banana.txt","This is a Fruit")

fs.unlinkSync("textfile/banana.txt")
fs.writeFileSync("textfile/banana.txt","This is a Fruit")
fs.unlinkSync("textfile/banana.txt")


console.log(process.argv[2])
const data = fs.readFileSync("textfile/apple.txt","utf-8")

fs.appendFileSync("textfile/apple.txt","and this is good for health")

console.log(data);
