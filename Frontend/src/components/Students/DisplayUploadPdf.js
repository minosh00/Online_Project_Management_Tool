
 import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const DisplayUploadPdf = () => {


  const [users, setUsers] = useState();


  
  const handleSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    navigate("/Login");
}


  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch(`http://localhost:8080/pdfupload/`);
      const data = await res.json();
      setUsers(data);
    };
    fetchUsers();
  }, []);

  return (
    <div className="">
    <div style={{ textAlign: "center" }}>
 <div style={{ marginTop: "30px" }}>
     <center><h1 style={{ color: "purple" }}><b>Research Project Management Tool Assignment schedule</b></h1></center>
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
                 <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/TopicRegister" aria-current="page">Topic Register</a>

                 {/* student Pages */}
                 <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/UploadPdf" aria-current="page">Upload Assignment </a>
                 <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/StudentProfile" aria-current="page">My Profile</a>
                 <a style={{ display: localStorage.getItem("userRole") == "student" ? "flex" : "none" }} className="nav-link active" href="/UploadPdf" aria-current="page">View Assignment </a>
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
     <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{ float: "right" }}>
         Logout
     </button>
 </nav>
 <br />
 <br />
 <div className="container">
     <div className="">
                   <div className="">
                       <div className="">
                
                           </div>
                           <div className="">
                             
                           <div className="row">
       <br></br><br></br>
       {users?.map((user) => (
         <div className="col-md-3 card me-5 mt-2 p-1 mb-2  d-flex" key={user._id}><br></br>
           <img src={user.avatar} alt="" width={"50%"} height={"50%"} />
        
 
           <a href={user.pdf} download>Click to download Assignment </a>
           <div className="p-2">
             <h3> Assignment Type :{user.name}</h3>
           </div>
         </div>
       ))}
     </div>
                           </div>
                       </div>
                   </div>
          
     </div>
 
 </div>
          
     </div>
  )
};

export default DisplayUploadPdf;
