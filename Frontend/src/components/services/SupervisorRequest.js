import axios from 'axios';


let createSupervisorURL = "https://afresearchprojectmanagementtoo.herokuapp.com/SupervisorRequest/createSupervicor"; 
let getSupervisorByIdURL = "https://afresearchprojectmanagementtoo.herokuapp.com/SupervisorRequest/getAllSupervicorRequest/";
let updateSupervisorByIdURL = "https://afresearchprojectmanagementtoo.herokuapp.com/SupervisorRequest/updateSupervicorByID/";
let AllSupervicorRequestStatusURL = "https://afresearchprojectmanagementtoo.herokuapp.com/SupervisorRequest/AllSupervicorRequestStatus/";




export async function createSupervicor(data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        supervisorID:data.supervisorID,
        
    };


    return await axios.post(createSupervisorURL,alldata);
}



export async function updateGroupsByID(id,data) {
    const alldata = {
      
        GroupID:data.GroupID,
        GruopLeaderEmail:data.GruopLeaderEmail,
        supervisorID:data.supervisorID,
        status:data.status
    };


    return await axios.patch(updateSupervisorByIdURL + id,alldata);
}


export async function getAllSupervicorRequest(id) { 
    console.log(id);
    return await axios.get(getSupervisorByIdURL+id);
}




export async function AllSupervicorRequestStatus() { 
    console.log(id);
    return await axios.get(AllSupervicorRequestStatusURL);
}



