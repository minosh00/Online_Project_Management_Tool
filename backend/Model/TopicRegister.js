const mongoose = require("mongoose");

const topicSchema = mongoose.Schema({

    GroupID:{type:String, required:true},
    TopicName:{type:String, required:true},
    GruopLeaderEmail:{type:String , required:true},
    GruopMembersItNumbers:{type:String, required:true},
    GruopLeaderItNumber:{type:String, required:true},
    GruopMembersNames:{type:String, required:true},
    status:{type:String, required:true , default:'pending'},
},{
    timestamps:true,
}) 

const topicModel=mongoose.model('Topics' , topicSchema)

module.exports = topicModel