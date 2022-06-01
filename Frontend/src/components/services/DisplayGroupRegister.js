import axios from 'axios';


let getGroupURL = "http://localhost:8080/gruops/getAllGroups"; 
let getGroupByIdURL = "http://localhost:8080/gruops/getGroupsById/";
let updateGroupByIdURL = "http://localhost:8080/gruops/updateGroupsByID/";
let updateGroupIDByIdURL = "http://localhost:8080/gruops/updateGroupsIDByID/";
let updatepannelmemberByIDURL = "http://localhost:8080/gruops/updatepannelmemberByID/";


export async function updateGroupsByID(id,data) {
    const alldata = {
      
        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopLeaderEmail:data.GruopLeaderEmail,
        GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopMembersNames:data.GruopMembersNames,
        pannelmemberName:data.pannelmemberName,
        GruopMembersEmail:data.GruopMembersEmail,
        GruopMembersContectNumber:data.GruopMembersContectNumber,
        GroupID:data.GroupID
    };


    return await axios.patch(updateGroupByIdURL + id,alldata);
}

export async function getAllGroups() { 
    return await axios.get(getGroupURL);
}

export async function getGroupsById(id) { 
    return await axios.get(getGroupByIdURL + id);
}



export async function updateGroupsIDByID(id,data) {
    const alldata = {
      

        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopLeaderEmail:data.GruopLeaderEmail,
         GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopMembersNames:data.GruopMembersNames,
        pannelmemberName:data.pannelmemberName,
        GruopMembersContectNumber:data.GruopMembersContectNumber,
        GruopMembersEmail:data.GruopMembersEmail,
        GroupID:data.GroupID
    };

    return await axios.patch(updateGroupIDByIdURL + id,alldata);
}


//allocated pannel member 

export async function updatepannelmemberByID(id,data) {
    const alldata = {
      

        GruopLeaderItNumber:data.GruopLeaderItNumber,
        GruopLeaderEmail:data.GruopLeaderEmail,
         GruopMembersItNumbers:data.GruopMembersItNumbers,
        GruopMembersNames:data.GruopMembersNames,
        pannelmemberName:data.pannelmemberName,
        GruopMembersContectNumber:data.GruopMembersContectNumber,
        GruopMembersEmail:data.GruopMembersEmail,
        GroupID:data.GroupID
    };

    return await axios.patch(updatepannelmemberByIDURL + id,alldata);
}
