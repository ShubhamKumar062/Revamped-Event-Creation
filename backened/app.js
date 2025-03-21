const express = require("express");
const {userModel} = require("./models/userModel.js")
const {connection} = require("./Config/db.js")
const jwt = require("jsonwebtoken")
require("dotenv").config

const app = express();
app.use(express.json());

const Authmiddleware = (req,res,next) =>{
  const {token} = req.query;
    jwt.verify(token, 'SecretKey', function(err, decoded) {
      if(err){
        res.send("Please Login First!")
      }else{
        next();
      }
    });
}
app.post("/signup", async (req,res) =>{
  const {name , email , password } = req.body;
  try{
    const userExists = await userModel.findOne({email: email});
    if (userExists){
      return res.status(400).json("User is already Exist!");
    }
    await userModel.create({name, email, password});
    res.status(201).json("Signup Successfully!");
  }catch(err){
    console.log(err.message);
    res.status(500).json("Signup Failed!");
  }
})

app.post("/login", async (req,res) =>{
  const {name , email , password } = req.body;
  try{
    const userExists = await userModel.findOne({email: email, password : password});
    if (userExists){
      const token = jwt.sign({ School: 'massai' }, 'SecretKey');
        res.status(201).json({message : "Login Successfully!", token : token});
    }else{
      res.status(404).json({message : "Login Failed"})
    }
  }catch(err){
    console.log(err.message);
    res.status(500).json("Login Failed!");
  }
})

app.get("/protectedFiles",  Authmiddleware, async  (req,res) =>{
   const {token} = req.query;
    jwt.verify(token, 'SecretKey', function(err, decoded) {
      if(err){
        res.send("Please Login First!")
      }else{
        res.send("data......")
      }
    });
   
})

const server = async () => {
try{
  await connection;
  console.log("database is Coonnected!")
  app.listen(6065 , () =>{
    console.log(`Server is Running!`)
  })
}catch(err){
  console.log("Database Connection is Failed", err);
}
};
server();