
 import React from "react";
import { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { AuthUser } from "../services/AuthServices";
import logo from './images/profileeee-removebg-preview.png'

const StudentProfile = () => {
    const navigate = useNavigate();

    const handleSubmit = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userRole");
        navigate("/Login");
    }

    const [UserName, setUserName] = useState("");
    const [UserEmail, setUserEmail] = useState("");
    const [currentUserID, setcurrentUserID] = useState("");


    const handleUserName = (e) => {
        setUserName(e.target.value);
    };


    const handleUserEmail = (e) => {
        setUserEmail(e.target.value);
    };

  

    const StudentDetails = async () => {
        let token = localStorage.getItem('token');
        let data = await AuthUser(token);
        console.log("current User", data?.data);
        setcurrentUserID(data?.data?._id);
        setUserName(data?.data?.name);
        setUserEmail(data?.data?.email);
       
    }


    useEffect(() => {
        StudentDetails();
    }, [])

    

    return (
        <div style={{ textAlign: "center" }}>
            <div style={{ marginTop: "30px" }}>
                <center><h1 style={{ color: "purple" }}><b>Research Project Management Tool User profile</b></h1></center>
                <img src='' />
            </div>
            <br />
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
               
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
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/UploadPdf" aria-current="page">Upload Assignment </a>
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/RegisterGroup" aria-current="page">Register Group</a>

                            

           
                            {/* superviosr Pages */}
                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">View All Topic  </a>
                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">check student group  </a>
                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">Evaluate Documents   </a>
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/DisplayUploadPdf" aria-current="page">View Assignment </a>
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/TopicRegister" aria-current="page">Topic Register</a>


                            <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
                            <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/DisplayTopicStatusByStudent" aria-current="page">Display Topic Status </a>

                            
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
                <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
                    Logout
                </button>
            </nav>
            <br />
            <br />

            <div>
            <div class="card" style={{ width:"1000px" , marginLeft:"400px"}}>
  <img class="card-img-top" src={logo}  alt="Card image cap" style={{width:"300px" , height:"300px" , marginLeft:"330px"}}/>
  <div class="card-body">
    <h2 class="card-title">Profile</h2>
    <p class="card-text">Check this all details your profile.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item" style={{color:"red"}} > Name  <input onChange={handleUserName} style={{color:"red"}} className="input"
        value={UserName} type="text" readOnly={true} /></li>
    <li class="list-group-item" style={{color:"red"}} > Email <input onChange={handleUserEmail} style={{color:"red"}} className="input"
        value={UserEmail} type="email" readOnly /></li>
 
  </ul>

</div>
                <br />
                <br />
                <div  >
             
             
                 
                </div>
            </div>
            <br /><br /><br /><br /><br /><br /><br /><br />
        </div>
    );
};


export default StudentProfile;