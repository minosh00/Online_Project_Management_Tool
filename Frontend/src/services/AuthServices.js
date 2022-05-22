import axios from 'axios';


let RegisterURL = "http://localhost:8080/user/signup";
let LoginURL = "http://localhost:8080/user/signin";
let AuthURL = "http://localhost:8080/user/auth";
let getAllUsers = "http://localhost:8080/user/getallusers";
let CreateHotelAdmin = "http://localhost:8080/user/signup";
let UpdateHotelAdmin = "http://localhost:8080/user/updateUserById/";
let DeleteHotelAdmin = "http://localhost:8080/user/deleteUser/";

export async function RegisterStudent(data) {
    const alldata = {

        name:data.name,
        email:data.email,
        password:data.password,
        userRole:"student"
    };

    return await axios.post(RegisterURL,alldata);
}


export async function LoginStudent(data) {
    const alldata = {
        email:data.email,
        password:data.password,
    };
  
    return await axios.post(LoginURL,alldata);
}

export async function AuthUser(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

export async function GetallStudents(){
  return axios.get(getAllUsers);
}





export async function CreateStaffSupervisor(data) {
  const alldata = {
      name:data.name,
      email:data.email,
      password:data.password,
      userRole:"Supervisor"
  };

  return await axios.post(CreateHotelAdmin,alldata);
}





export async function CreateStaffCoSupervisor(data) {
  const alldata = {
      name:data.name,
      email:data.email,
      password:data.password,
      userRole:"CoSupervisor"
  };

  return await axios.post(CreateHotelAdmin,alldata);
}



export async function CreateStaffPanelMember(data) {
  const alldata = {
      name:data.name,
      email:data.email,
      password:data.password,
      userRole:"PanelMember"
  };

  return await axios.post(CreateHotelAdmin,alldata);
}








export async function CreateAdmin(data) {
  const alldata = {
      name:data.name,
 
      email:data.email,
      password:data.password,
      userRole:"Admin"
  };

  return await axios.post(CreateHotelAdmin,alldata);
}




export async function UpdateAdmin(id,data) {
  const alldata = {
      name:data.name,
      email:data.email,
      password:data.password,
      userRole:"Admin"
  };

  return await axios.patch(UpdateHotelAdmin + id,alldata);
}

export async function DeleteAdmin(id) {
  return await axios.delete(DeleteHotelAdmin + id);
}