import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import StudentProfile from './components/StudentProfile';
import AllStudents from './components/Admin/AllStudents';
import AdminRegister from './components/Admin/AdminRegister';
import StaffRegisterss from './components/Admin/StaffRegisterSupervisor';
import StaffRegister from './components/Admin/Staff';
import CoSupervisor from './components/Admin/CoSupervisor';
import Panalmemeber from './components/Admin/panalmemeber';


//pdf
import UploadPdf from './components/Students/UploadPdf';
import DisplayUploadPdf from './components/Students/DisplayUploadPdf';


//student
import TopicRegister from './components/Students/TopicRegister';
import DisplayTopicStatus from './components/Students/DisplayTopicStatus';
import UpdateRoom from './components/Admin/UpdateTpoicStatus';
import DisplayTopicStatusByStudent from './components/Students/DisplayTopicStatusByStudent';
import RegisterGroup from './components/Students/RegisterGroup';


import Mailer from './components/Students/Mailer';


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
          <Route  path="/AdminRegister" element={<AdminRegister />} />

          <Route  path="/StaffRegister" element={<StaffRegister />} />

          <Route  path="/supervisor" element={<StaffRegisterss />} />

          <Route  path="/CoSupervisor" element={<CoSupervisor />} />

          <Route  path="/panalmemeber" element={<Panalmemeber />} />


          
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


