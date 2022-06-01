import axios from 'axios';


let createCoSupervisorURL = "http://localhost:8080/CoSupervisorRequest/createCoSupervisor"; 
let getCoSupervisorByIdURL = "http://localhost:8080/CoSupervisorRequest/getAllCoSupervisorRequest/";
let updateCoSupervisorByIdURL = "http://localhost:8080/CoSupervisorRequest/updateCoSupervisorByID/";




export async function createCoSupervisorRequest(data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        CosupervisorID:data.CosupervisorID,
        
    };


    return await axios.post(createCoSupervisorURL,alldata);
}



export async function updateGroupsByID(id,data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        CosupervisorID:data.CosupervisorID,
        status:data.status
    };


    return await axios.patch(updateCoSupervisorByIdURL + id,alldata);
}

export async function getAllCoSupervisorRequest(id) { 
    console.log(id);
    return await axios.get(getCoSupervisorByIdURL+id);
}



