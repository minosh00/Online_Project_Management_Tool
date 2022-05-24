 
  import React from 'react';
  import { Link } from "react-router-dom";
let loadingGif = require("../images/3ffa463173416a5eea503b949da5f56b-removebg-preview.png")

const Staff = ()=>(
   
 



<div >
<center>
<div style={{marginTop:"30px"}}>
<center><h1 style={{"font-family": 'Chilanka'}} ><b>  Research Project Management  Staff members  </b></h1></center> 
</div>
<br/>
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
<div>
<div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
       <div className="card card0 border-0">
       <img src={loadingGif} style={{width:"600px" , height:"500px", marginLeft:"100px"}} alt="" />
       <table class="table table-dark" style={{marginLeft:"1000px" , marginTop:"-410px" ,width:"380px" , height:"320px"}}>
             <thead>
             <tr>
                 <td style={{marginLeft:"-300px" ,  fontSize:"20px"}} >Add Staff members</td>
               
               </tr>
               <tr>
                 <th>
                 <Link  to="/panalmemeber">
                      <button type="button" class="btn btn-outline-success">Add Panel Member </button>  </Link>
                      </th>
               <br></br>
               </tr>
             </thead>
             <tbody>
            
               <tr>
                 <td>
                 <Link  to="/supervisor">
                     <button type="button" class="btn btn-outline-danger">Add Supervisor Member </button>
                     </Link>
                     </td>
          
               </tr>
               <tr>
                 <td>
                     <Link  to="/CoSupervisor">
                     <button type="button"  class="btn btn-outline-warning">Add Co-Supervisor Member</button>
                     </Link>
                  
                     </td>
               </tr>
            <tr>
               
               
               </tr>
              
             </tbody>
           </table>
   
       </div>
     
   </div>
   
</div>
</div>
  )
;


export default Staff;