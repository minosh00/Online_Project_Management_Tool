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
          <Route  path="/Login" element={<Login />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/StudentProfile" element={<StudentProfile />} />
          <Route  path="/AllStudents" element={<AllStudents />} />
          <Route  path="/AdminRegister" element={<AdminRegister />} />

          <Route  path="/StaffRegister" element={<StaffRegister />} />

          <Route  path="/supervisor" element={<StaffRegisterss />} />

          <Route  path="/CoSupervisor" element={<CoSupervisor />} />

          <Route  path="/panalmemeber" element={<Panalmemeber />} />


          

          
            </Routes>
            </Router>
            </div>
    </>
  );
}

export default App;


