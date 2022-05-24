import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateTopicByID, getTopicById } from "../services/TopicService";

const UpdateTpoicStatus = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
  };

  const [GroupID, setGroupID] = useState("");
  const [GruopLeaderEmail, setGruopLeaderEmail] = useState("");
  const [GruopMembersItNumbers, setGruopMembersItNumbers] = useState("");
  const [GruopLeaderItNumber, setGruopLeaderItNumber] = useState("");
  const [GruopMembersNames, setGruopMembersNames] = useState("");
  const [status, setstatus] = useState("");

  const handleRoomNo = (e) => {
    setGroupID(e.target.value);
  };

  const handleRoomFloor = (e) => {
    setGruopLeaderEmail(e.target.value);
  };

  const handleRoomType = (e) => {
    setGruopMembersItNumbers(e.target.value);
  };

  const handlemember = (e) => {
    setGruopMembersNames(e.target.value);
  };

  const handlegruopleaderitnum = (e) => {
    setGruopLeaderItNumber(e.target.value);
  };
  const handlestatus = (e) => {
    setstatus(e.target.value);
  };

  const GetTopicData = async () => {
    let data = await getTopicById(id);
    console.log("Update topics", data);
    setGroupID(data?.data?.GroupID);
    setGruopLeaderEmail(data?.data?.GruopLeaderEmail);
    setGruopMembersItNumbers(data?.data?.GruopMembersItNumbers);
    setGruopMembersNames(data?.data?.GruopMembersNames);
    setGruopLeaderItNumber(data?.data?.GruopLeaderItNumber);
    setstatus(data?.data?.status);
  };

  useEffect(() => {
    GetTopicData();
  }, []);

  const UpdateTopicData = async (e) => {
    e.preventDefault();
    let newdata = {
      GroupID: GroupID,
      GruopLeaderEmail: GruopLeaderEmail,
      GruopMembersItNumbers: GruopMembersItNumbers,
      GruopMembersNames: GruopMembersNames,
      GruopLeaderItNumber: GruopLeaderItNumber,
      status: status,
    };

    let data = await updateTopicByID(id, newdata);
    console.log("Update success ", data);
    if (!data?.data?.GroupID) {
      alert("Update failed..");
    } else {
      alert("Update Successfull..");
      navigate("/DisplayTopicStatus");
    }
  };

  return (
    <div >
    <center>
<div style={{marginTop:"30px"}}>
  <center><h1 style={{"font-family": 'Chilanka'}} ><b>Welcome to  Research Project Management Tool system</b></h1></center> 
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
   


   
                    {/* superviosr Pages */}
                    <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">View All Topic  </a>
                    <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">check student group  </a>
                    <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/DisplayTopicStatus" aria-current="page">Topic Approved  </a>


                    <a style={{ display: localStorage.getItem("userRole") == "Supervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>

                    
                    {/* co superviosr Pages */}
                    <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page">Assignment </a>
                    <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
                    <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">View All Topic  </a>
                    <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/topic" aria-current="page">check student group  </a>
                    <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/DisplayTopicStatus" aria-current="page">Topic Approved    </a>

                    
                    {/* panel member Pages */}
                    <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page"> Evaluate topics </a>
                    <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/" aria-current="page"> Evaluate students’ presentations</a>
                    <a style={{ display: localStorage.getItem("userRole") == "CoSupervisor" ? "flex" : "none" }} className="nav-link active" href="/DisplayTopicStatus" aria-current="page">Topic Approved    </a>

                    <a style={{ display: localStorage.getItem("userRole") == "PanelMember" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>

   
   
   
         </div>
        </div>
     </div>
  </nav>
</center>







    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <center>
        <br />
        <form>
          <label className="label" style={{color:"red" , fontSize:"30px" }}>Status (Topic)</label>

          <select
            class="form-control"
            id="floatingInput"
            value={status}
            style={{ width: "200px" }}
            onChange={handlestatus}
          >
            <option value="Approved">Approved</option>
            <option value="Reject">Reject</option>
          </select>
          <br></br>

          <button
            onClick={(e) => UpdateTopicData(e)}
            className="btn btn-outline-danger"
            type="submit"
          >
            Update
          </button>
        </form>
      </center>
    </div>
    </div>
  );
};

export default UpdateTpoicStatus;


