import { Chat, Notifications, Search } from '@mui/icons-material'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../state/AuthContext';
import "./Topber.css";

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
  <div className='topbarContainer'>
    <div className="topbarLeft">
    <Link to="/"style={{textDecoration:"none",color:"black"}}>
      <span className="logo">Real-sns</span>
    </Link>
    </div>
    <div className="topbarCenter">
      <div className="serchbar">
        <Search className='searchIcon'/>
        <input 
        type="text"
        className='searchInput'
        placeholder="探し物はなんですか？"
        />
      </div>
    </div>
    <div className='topbarRight'>
      <div className='topbarItemIcons'>
      <div className='topbarIconItem'>
        <Chat/>
        <span className='topbarIconBadge'>1</span>
      </div>
      <div className='topbarIconItem'>
       <Notifications/> 
      <span className='topbarIconBadge'>2</span>
      </div>
      <Link to={`/profile/${user.username}`}>
          <img src={
                    user.profilePicture
                      ? PUBLIC_FOLDER + user.profilePictur
                      : PUBLIC_FOLDER + "/person/noAvatar.png"
                  } alt='' className='topbarImg'
            />
        </Link>
      </div>
    </div>
    

  </div>
  )
  
}
