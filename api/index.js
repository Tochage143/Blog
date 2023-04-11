const express =require('express')
const cors=require("cors");
const app=express();
const mongoose =require("mongoose");
const User=require("./models/User")
const uri = "mongodb+srv://Thekiller:B5h0os1vVzkSwC82@cluster0.bpopuy0.mongodb.net/?retryWrites=true&w=majority";

  mongoose.connect(uri)
app.use(cors());
app.use(express.json());
app.post('/register',async (req,res)=>{
   const {username, password}=req.body;
const userDoc = await User.create({
		username, password
	})
	res.json(userDoc);
	
});

app.listen(4000);