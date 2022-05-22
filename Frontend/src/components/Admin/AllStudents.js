 
 import React from "react";
import {useState ,useEffect }from 'react'
import { Link , useNavigate } from "react-router-dom";
import { GetallStudents } from "../../services/AuthServices";
import logo from '../images/admin.jpg'

const AllStudents = () => {

    const navigate = useNavigate();

    const handleSubmit= ()=>{
      localStorage.removeItem("token");
      localStorage.removeItem("userRole");
      navigate("/Login");
    }

	const [students , setCustomers] = useState([])
  
	const GetStudents = async () =>{
        let data = await GetallStudents();
        let studentdata =[];
        console.log("All Users",data?.data);
         data?.data.map((users)=>{
            if(users?.userRole == "student")
            {
                studentdata.push(users);
            }
        });
        setCustomers(studentdata);
    }
  

	useEffect(() => { 
        GetStudents();
   },[])
  

   

	return (
		<div style={{ textAlign: "center" }}>
             <div style={{marginTop:"30px"}}>
             <center><h1 style={{ color: "red" }}><b>Research Project Management Tool Student List </b></h1></center>
                    <img src={logo}  style={{width:"200px" , height:"200px" , marginRight:"-1200px"}} />
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
             <button onClick={handleSubmit} className="btn btn-outline-danger" type="submit" style={{float:"right"}}>
                      Logout
                  </button>
          </nav>
			<br/>
			<br/>
			<div>
               
                <div >
                    <center >
                    <center><h1 style={{ color: "red" }}><b>All Students List </b></h1></center>
                    </center>
                    
                    <br/><br/><br/>
                    <table className="table table-striped table-dark" style={{width:"1300px" , marginLeft:"180px"}}>
                        <thead>
                            <tr>
                            <th>Temporary_ID</th>
                            <th>Student  Name</th>
                            <th>Student Email</th>
                            <th>Date</th>
                          
                            </tr>
                        </thead>  
                        <tbody>
                            {students.map((students,index)=>(
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{students?.name}</td>
                                    <td>{students?.email}</td>
                                    <td>{students?.date}</td>
                                 
                                

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
			</div>
		</div>
	);
};


export default AllStudents;