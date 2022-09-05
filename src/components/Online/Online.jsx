import React from 'react'

export default function Online({user}) {
  return (
    <li className='RightbarFriend'>
            <div className="rightbarProfileImgContainer">
              <img 
              src={user.profilePicture} 
              alt=''
              className='rigitbarProfileImg'
              />
              <span className='rightbarOnline'></span>
            </div>
            <span className='rightbarUserName'>{user.username}</span>
    </li>
  )
}
