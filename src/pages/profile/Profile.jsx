import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidbar/Sidebar'
import TimeLine from '../../components/timeline/TimeLine'
import Topbar from '../../components/topbar/Topbar'
import "./Profile.css"
import { useParams } from 'react-router-dom'
export default function Profile() {
  const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const [user,setUser]=useState({});
  const username= useParams().username;

  useEffect(()=>{
    const fetchUser = async () =>{
    const resoinse =await axios.get(`/users?username=${username}`);
    console.log(resoinse);
    setUser(resoinse.data);
    };
    fetchUser();
  },[]);

  return (
    <>
    <Topbar/>
    <div className='profile'>
      <Sidebar/>
      <div className="profileRight">
          <div className="profileRightTop">
              <div className="profileCover">
                  <img 
                  src={user.coverPicture ||REACT_FOLDER+"/post/3.jpeg" }
                  alt="" 
                  className='profileCoverImg'
                  />
                  <img src={user.profilePicture||REACT_FOLDER+"/person/noAvatar.png"}alt="" className='profileUserImg'/>
              </div>
              <div className="profileInfo">
                  <h4 className='profileInfoName'>{user.username}</h4>
                <span className='profileInfoDesc'>{user.desc}</span>
              </div>
          </div>
          <div className="profileRightBottom">
                <TimeLine username={username}/>
                <Rightbar user={user}/>
          </div>
        
      </div>
      
    </div>
    </>
  )
}
