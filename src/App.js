import Home from "./pages/home/Home";
import React, { useContext } from 'react';
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import{BrowserRouter as Router,Navigate,Route,Routes}from"react-router-dom";
import { AuthContext } from "./state/AuthContext";


function App() {
  const {user} =useContext(AuthContext);
  //return <Register/>
  //return <Profile/>
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ?<Home/>:<Register/>}/>
        <Route path="/login" element={user? <Navigate to="/"/> :<Login/>}/>
        <Route path="/register" element={user? <Navigate to="/"/>:<Register/>}/>
        <Route path="/profile/:username" element={<Profile/>}/>
      </Routes>
    </Router>
  )
}

export default App;
