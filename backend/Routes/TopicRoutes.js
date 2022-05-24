const express = require("express");
const Router = express.Router();
const Topic = require("../Model/TopicRegister")
const mongoose = require("mongoose");


Router.get("/getAllTopics", async (req, res) => {
   
    try {
         const topics = await Topic.find()
    res.send(topics)
    } catch (error) {
         return res.status(400).json({ message: 'wrong' });
    }

});





 Router.put("/getTopicByid/", async(req, res) => {
     console.log(req.body);
    const {id} = req.params;
     try {
          const topics = await Topic.findOne({'_id' : req.body._id})
          res.send(topics)
     } catch (error) {
          return res.status(400).json({ message: error });
     }
 });




Router.post("/addTopic", async(req, res) => {
    const { topic , GroupID,
        TopicName  ,GruopLeaderEmail ,GruopMembersItNumbers ,GruopLeaderItNumber ,GruopMembersNames, pending } = req.body
  
       const newtopics = new Topic({
        GroupID : topic,
        TopicName, GroupID,
        GruopLeaderEmail , GruopMembersItNumbers ,GruopLeaderItNumber, GruopMembersNames ,  status:'pending'
       })
       try {
            await newtopics.save()
            res.send(' Topic Added Successfully')
       } catch (error) {
            return res.status(400).json({ error });
       }
  });
  


  Router.put("/update/:id" , (req,res) =>{
    Topic.findById(req.params.id)
     .then(Topic =>{
         
        Topic.GroupID=req.body.GroupID,
        Topic.GruopLeaderEmail=req.body.GruopLeaderEmail,
        Topic.GruopMembersItNumbers=req.body.GruopMembersItNumbers,
        Topic.GruopLeaderItNumber=req.body.GruopLeaderItNumber,
        Topic.GruopMembersNames=req.body.GruopMembersNames,
        Topic.status=req.body.status,
        
   
      
 
         Topic
         .save()
         .then(() => res.json("Room was updated successfully"))
         .catch(err => res.status(400).json(`${err}`));
     })
     .catch(err => res.status(400).json(`${err}`));
 });
 









  module.exports = Router