// const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("greet",()=>{
//     console.log("Hello Sagar Masal");
    
// })

// emitter.emit("greet");

// -------------------------------------------------------------------------------

const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet",(arg)=>{
    console.log(`Hii My FirstName is ${arg.name} and surname is:- ${arg.surname}`);
    
})

emitter.emit("greet",{name:"Sagar", surname:"Zimal"});