
const express = require("express");
const TodoModel = require("../ConnectDatabase/Models/Todo");
const Authentication = require("../middleware/Authentication");

const AppRouter = express.Router();

AppRouter.get("/",async (req,res)=>{
    try{
         const data = await TodoModel.find();
         res.send({data : data})
    }
    catch(err){
        res.status(404).send("Something went wrong");
    }
})


AppRouter.get("/single/:id",async (req,res)=>{
    try{
         const data = await TodoModel.findById(req.params.id);
         res.send({data : data})
    }
    catch(err){
        res.status(404).send("Something went wrong");
    }
})

AppRouter.post("/create",Authentication,async (req,res)=>{
    try{
         const data = await TodoModel.create(req.body);
         await data.save();
         res.send({message : "Succesfully Created"})
    }
    catch(err){
        res.status(404).send("Something went wrong");
    }
})

AppRouter.patch("/edit/:id",Authentication,async (req,res)=>{
    try{
         const {name,gender,age,hobby,image}= req.body;
         const id = req.params.id;
         const updated = await TodoModel.findByIdAndUpdate(id,{
            name,gender,age,hobby,image
         });
         res.send({message : "Successfully Updated"})

    }
    catch(err){
        res.status(404).send("Something went wrong");
    }
})

AppRouter.delete("/delete/:id",Authentication,async (req,res)=>{
    try{
         const id = req.params.id;
         const deleted = await TodoModel.findByIdAndDelete(id);
         res.send({message : "Successfully Deleted"})
    }
    catch(err){
        res.status(404).send("Something went wrong");
    }
})

module.exports = AppRouter;