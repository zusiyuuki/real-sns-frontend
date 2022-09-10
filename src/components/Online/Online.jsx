import React from 'react'

export default function Online({user}) {
  const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className='RightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img 
              src={REACT_FOLDER+user.profilePicture} 
              alt=''
              className='rigitbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>{user.username}</span>
    </li>
  )
}
