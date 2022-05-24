import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const AddTopic = () => {
  const [GroupID, setGroupID] = useState("");
  const [TopicName, setTopicName] = useState();
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [GruopMembersItNumbers, setGruopMembersItNumbers] = useState("");
  const [GruopLeaderItNumber, setGruopLeaderItNumber] = useState("");
  const [GruopMembersNames, setGruopMembersNames] = useState("");

  const changeOnClick = (f) => {
    

    const addtopic = {
        GroupID,
        TopicName,
        GruopLeaderEmail,
        GruopLeaderItNumber,
        GruopMembersItNumbers,
        GruopMembersNames,
    };

    axios.post("http://localhost:8080/topic/addTopic/", addtopic);

    Swal.fire("Congrats", " Topic Register  successfully", "success")

  

    
    
  };
  return (

    <div>
			      <center>
      <div style={{marginTop:"30px"}}>
          <center><h1>Welcome to  Research Project Management Tool system</h1></center> 
        </div>
        <br/>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                   <a className="navbar-brand" href="">Home</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>
               <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                 <div className="navbar-nav">

   {/* admin Pages */}
   <a style={{ display: localStorage.getItem("userRole") == "Admin" ? "flex" : "none" }} className="nav-link active" href="/AllStudents" aria-current="page">All Students</a>
                            <a style={{ display: localStorage.getItem("userRole") == "Admin" ? "flex" : "none" }} className="nav-link active" href="/AdminRegister" aria-current="page">Register Admin</a>
                            <a style={{ display: localStorage.getItem("userRole") == "Admin" ? "flex" : "none" }} className="nav-link active" href="/StaffRegister" aria-current="page">Add Staff</a>

                            {/* student Pages */}
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page">Assignment </a>
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
           
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/TopicRegister" aria-current="page">Topic Register</a>


           
                            {/* superviosr Pages */}
                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">View All Topic  </a>
                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">check student group  </a>
                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">Evaluate Documents   </a>


                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>

                            
                            {/* co superviosr Pages */}
                            <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page">Assignment </a>
                            <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
                            <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">View All Topic  </a>
                            <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">check student group  </a>
                            <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">Evaluate Documents   </a>

                            
                            {/* panel member Pages */}
                            <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page"> Evaluate topics </a>
                            <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page"> Evaluate students’ presentations</a>

                            <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>

           
           
           
           
                 </div>
                </div>
             </div>
          </nav>
        </center>
		<br/>
    <div className="container ">
        <br></br> <br></br>
      <center>
        <h1>Register Your Research Topic</h1>
        <form onSubmit={changeOnClick} encType="">
            <br></br>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlfor="name">Group ID</label>
              <br />
              <input
                type="text"
                onChange={(f) => setGroupID(f.target.value)}
                className="form-control"
      
              />
            </div>
<br></br>

            <div className="form-group col-md-6">
              <label htmlfor="TopicName">Topic Name</label>
              <br />
              <input
                type="text"
                onChange={(f) => setTopicName(f.target.value)}
                className="form-control"
      
              />
            </div>
<br></br>

            <div className="form-group col-md-6">
              <label htmlfor="description">Gruop Leader Email</label>
        
              <input
                type="email"
                onChange={(f) => setGruopLeaderEmail(f.target.value)}
                className="form-control"
       
              />
            </div>
          </div>
          <div className="form-row">
 
          <div className="form-group col-md-6">
            <label htmlfor="phoneNumber">Gruop Leader ItNumber </label>
            <input
              type="text"
              onChange={(f) => setGruopLeaderItNumber(f.target.value)}
              className="form-control"
            />
          </div>
       </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlfor="type">Gruop Members ItNumbers</label>
      
      
            <textarea class="form-control" id="exampleFormControlTextarea3"  onChange={(f) => setGruopMembersItNumbers(f.target.value)} rows="7">
            </textarea>

          </div>
 
          <div className="form-group col-md-6">
            <label htmlfor="image1">Gruop Members Names</label>
            <br />
            <textarea class="form-control" id="exampleFormControlTextarea3" onChange={(f) => setGruopMembersNames(f.target.value)}rows="7">
            </textarea>
         
          </div>
         </div>
          <br />
          <br />

          <button type="submit" className="btn btn-primary">
           Submit Topic
          </button>
        </form>
      </center>

    </div>
    </div>
  );
};

export default AddTopic;