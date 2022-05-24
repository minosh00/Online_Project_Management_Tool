const mongoose = require('mongoose');
const Topic = require("../Model/TopicRegister");




const getAllTopics = async (req, res) => { 
    try {
        const topics = await Topic.find();
                 
        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}




const updateTopicByID = async (req, res) => {
    const { id } = req.params;
    const { GroupID, GruopLeaderEmail, GruopMembersItNumbers , GruopLeaderItNumber,GruopMembersNames, status} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    const updatedTopic = { GroupID, GruopLeaderEmail, GruopMembersItNumbers , GruopLeaderItNumber,GruopMembersNames, status, _id:id};

    await Topic.findByIdAndUpdate(id, updatedTopic, { new: true });

    res.json(updatedTopic);
}



const updateTopicemailByID = async (req, res) => {
    const { id } = req.params;
    const { GroupID, GruopLeaderEmail, GruopMembersItNumbers , GruopLeaderItNumber,GruopMembersNames, status} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    const updatedTopic = { GroupID, GruopLeaderEmail, GruopMembersItNumbers , GruopLeaderItNumber,GruopMembersNames, status, _id:id};

    await Topic.findByIdAndUpdate(id, updatedTopic, { new: true });

    res.json(updatedTopic);
}



const getTopicById = async (req, res) => { 
    const { id } = req.params;

    try {
        const topics = await Topic.findById(id);
        
        res.status(200).json(topics);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={getAllTopics, updateTopicByID , getTopicById  ,updateTopicemailByID};