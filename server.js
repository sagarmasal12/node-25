const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json())


// sample api 
app.get("/api/users",(req,res)=>{
  const users =[
     { id: 1, name: "Sagar", role: "Developer" },
    { id: 2, name: "Amit", role: "Tester" },
  ]
  res.json(users)
})

app.listen(PORT,()=>{
  console.log(`server running at http://localhost:${PORT}`);
  
});
