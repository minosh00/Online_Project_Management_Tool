import axios from 'axios';


let createTopicRequestURL = "https://afresearchprojectmanagementtoo.herokuapp.com/topicsrequest/createTopicRequest"; 
let getAllTopicRequestURL = "https://afresearchprojectmanagementtoo.herokuapp.com/topicsrequest/getAllTopicRequest/";
let updateTopicRequestByIDURL = "https://afresearchprojectmanagementtoo.herokuapp.com/topicsrequest/updateTopicRequestByID/";
let getTopicByIdURL = "https://afresearchprojectmanagementtoo.herokuapp.com/topicsrequest/getTopicById/";
let SendEmailByidURL = "https://afresearchprojectmanagementtoo.herokuapp.com/topicsrequest/SendEmailByid/";
let getAlltopiclistdURL = "https://afresearchprojectmanagementtoo.herokuapp.com/topicsrequest/getAlltopiclist/";



export async function createTopicRequest(data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopMembersNames:data.GruopMembersNames,
        status:data.status,
        Urls:data.Urls,
        TopicName:data.TopicName,
        Message:data.Message,
        supervisorID:data.supervisorID,
    };


    return await axios.post(createTopicRequestURL,alldata);
}


export async function getTopicById(id) { 
    return await axios.get(getTopicByIdURL + id);
}


export async function getAlltopiclist() { 
    return await axios.get(getAlltopiclistdURL);
}




export async function updateTopicRequestByID(id,data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopMembersNames:data.GruopMembersNames,
        status:data.status,
        TopicName:data.TopicName,
        Urls:data.Urls,
        Message:data.Message,
        supervisorID:data.supervisorID,
    };


    return await axios.patch(updateTopicRequestByIDURL + id,alldata);
}



export async function SendEmailByid(id,data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopMembersNames:data.GruopMembersNames,
        status:data.status,
        TopicName:data.TopicName,
        Urls:data.Urls,
        Message:data.Message,
        supervisorID:data.supervisorID,
    };


    return await axios.patch(SendEmailByidURL + id,alldata);
}





export async function getAllTopicRequest(id) { 
    console.log(id);
    return await axios.get(getAllTopicRequestURL+id);
}



