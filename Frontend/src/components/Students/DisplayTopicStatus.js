import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "./Loader";
import { Link } from "react-router-dom";

function DisplayTopicStatus() {
  const [users, setusers] = useState();
  const [loading, setloading] = useState(true);
  useEffect(async () => {
    try {
      const data = await (
        await axios.get("http://localhost:8080/topic/getAllTopics/")
      ).data;
      setusers(data);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }, []);

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
              <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/DisplayTopicStatusByStudent" aria-current="page">Display Topic Status </a>

              

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

    <div className="row">
      {loading && <Loader />}

      <div className="col-md-7">
        <br></br>

        <br></br>
        <table className="table table-bordered table-dark" style={{marginLeft:"190px" , marginTop:"-20px"}}>
          <thead className="bs">
            <tr>
              <th>Group ID</th>
              <th>Topic</th>
              <th>Gruop Leader ItNumber</th>
              <th>status</th>
              <th>Accept or Rejected </th>
              <th>send email  </th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((user) => {
                return (
                  <tr>
                    <td>{user.GroupID}</td>
                    <td>{user.TopicName}</td>
                    <td>{user.GruopLeaderItNumber}</td>
                    <td>{user.status}</td>
                    

                    <td>  <Link to ={{pathname:`/updateTopicByID/${user?._id}`}}>
                                    <button  type="button"  className="btn btn-outline-success" style={{marginTop:'10px'}} > Reject or approved </button>
                                    </Link>&nbsp;</td>




                                    <td>  <Link to ={{pathname:`/updateTopicemailByID/${user?._id}`}}>
                                    <button  type="button"  className="btn btn-outline-success" style={{marginTop:'10px'}} > Send Topic Status To  Students  </button>
                                    </Link>&nbsp;</td>

                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default DisplayTopicStatus;
