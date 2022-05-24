import axios from 'axios';


let getTopicsURL = "http://localhost:8080/topics/getAllTopics"; 
let getTopicByIdURL = "http://localhost:8080/topics/getTopicById/";
let updateTopicByIdURL = "http://localhost:8080/topics/updateTopicByID/";
let updateTopicemailByIdURL = "http://localhost:8080/topics/updateTopicemailByID/";



export async function updateTopicByID(id,data) {
    const alldata = {
      

        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopMembersNames:data.GruopMembersNames,
        status:data.status,
    };

    return await axios.patch(updateTopicByIdURL + id,alldata);
}

export async function getAllTopics() { 
    return await axios.get(getTopicsURL);
}

export async function getTopicById(id) { 
    return await axios.get(getTopicByIdURL + id);
}



export async function updateTopicemailByID(id,data) {
    const alldata = {
      

        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopMembersNames:data.GruopMembersNames,
        status:data.status,
    };

    return await axios.patch(updateTopicemailByIdURL + id,alldata);
}
