import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import StudentProfile from "./components/StudentProfile";
import AllStudents from "./components/Admin/AllStudents";
import AdminRegister from "./components/Admin/AdminRegister";
import StaffRegisterss from "./components/Admin/StaffRegisterSupervisor";
import StaffRegister from "./components/Admin/Staff";
import CoSupervisor from "./components/Admin/CoSupervisor";
import Panalmemeber from "./components/Admin/panalmemeber";
import {  useEffect, useState } from 'react';
//admin part



//pdf
import UploadPdf from "./components/Students/UploadPdf";
import DisplayUploadPdf from "./components/Students/DisplayUploadPdf";

//student
import UpdateRoom from "./components/Admin/UpdateTpoicStatus";
import RegisterGroup from "./components/Students/RegisterGroup";
import RegisterGropStatus from "./components/Admin/RegisterGropStatus";
import GroupConfirmEmail from "./components/Students/GroupConfirmEmail";
import AssignGroupID from "./components/Admin/AssignGroupID";
import Mailer from "./components/Students/Mailer";
import StudentAll from "./components/Students/StudentAll";
import AdminAll from "./components/Admin/AdminAll";

import React , {useEffect , useState} from 'react'

 function App() {

  const [user , setUser]=useState("");

  useEffect(() => {
    setUser(localStorage.getItem('userRole'));
  }, [])


  
  return (
    <>
        <div>
        <Router>
 
          <Routes>
          <Route  extact path="/" element={<Login />} />
          <Route  path="/Login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/StudentProfile" element={<StudentProfile />} />
          <Route  path="/AllStudents" element={<AllStudents />} />
          <Route  path="/UploadPdf" element={<UploadPdf />} />
          <Route  path="/DisplayUploadPdf" element={<DisplayUploadPdf />} />
          <Route  path="/TopicRegister" element={<TopicRegister />} />
          <Route  path="/DisplayTopicStatus" element={<DisplayTopicStatus />} />
          <Route path="/updateTopicByID/:id" element={<UpdateRoom/>}/>
          <Route path="/updateTopicemailByID/:id" element={<Mailer/>}/>
          <Route path="/DisplayTopicStatusByStudent" element={<DisplayTopicStatusByStudent/>}/>
          <Route path="/RegisterGroup" element={<RegisterGroup/>}/>


          
          
            </Routes>
            </Router>
            </div>
    </>
  );
}

export default App;


