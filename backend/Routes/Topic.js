const express = require("express");
const router = express.Router();
const {getAllTopics, updateTopicByID ,updateTopicemailByID ,getTopicById} = require("../Controllers/TopicController");



router.get("/getAllTopics",getAllTopics);
router.get("/getTopicById/:id",getTopicById);
router.patch("/updateTopicByID/:id",updateTopicByID);
router.patch("/updateTopicemailByID/:id",updateTopicemailByID);



module.exports = router;