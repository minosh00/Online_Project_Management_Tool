

const mongoose = require('mongoose');
const Groups = require("../Model/GroupRegister");




const getAllGroups = async (req, res) => { 
    try {
        const groups = await Groups.find();
                 
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}





const updateGroupsByID = async (req, res) => {
    const { id } = req.params;
    const {  GruopLeaderEmail, GruopLeaderItNumber , GruopMembersItNumbers,GruopMembersNames,GruopMembersEmail,GruopMembersContectNumber ,GroupID} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    const updatedGroups = {  GruopLeaderEmail, GruopLeaderItNumber , GruopMembersItNumbers,GruopMembersNames,GruopMembersEmail,GruopMembersContectNumber ,GroupID, _id:id};

    await Groups.findByIdAndUpdate(id, updatedGroups, { new: true });

    res.json(updatedGroups);
}



const updateGroupsIDByID = async (req, res) => {
    const { id } = req.params;
    const {  GruopLeaderEmail, GruopLeaderItNumber , GruopMembersItNumbers,GruopMembersNames,GruopMembersEmail,GruopMembersContectNumber ,GroupID} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No topic with id: ${id}`);

    const updatedGroups = {  GruopLeaderEmail, GruopLeaderItNumber , GruopMembersItNumbers,GruopMembersNames,GruopMembersEmail,GruopMembersContectNumber ,GroupID, _id:id};

    await Groups.findByIdAndUpdate(id, updatedGroups, { new: true });

    res.json(updatedGroups);
}



const createGroup = async (req, res) => {
    const groups = req.body;

    const newGroups = new Groups({ ...groups, creator: req.userId })

    try {
        await newGroups.save();

        res.status(201).json(newGroups );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}




const getGroupsById = async (req, res) => { 
    const { id } = req.params;

    try {
        const groups = await Groups.findById(id);
        
        res.status(200).json(groups);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}



module.exports ={getAllGroups, updateGroupsIDByID , createGroup  ,getGroupsById, updateGroupsByID};








