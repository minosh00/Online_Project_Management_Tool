const express = require("express");
const router = express.Router();

const {getAllGroups, updateGroupsIDByID , createGroup  ,getGroupsById, updateGroupsByID} = require("../Controllers/GroupController");


router.post("/createGroup",createGroup);
router.get("/getAllGroups",getAllGroups);
router.get("/getGroupsById/:id",getGroupsById);
router.patch("/updateGroupsIDByID/:id",updateGroupsIDByID);
router.patch("/updateGroupsByID/:id",updateGroupsByID);



module.exports = router;