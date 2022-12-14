import React from 'react'

import "./Rightbar.css"
import { Users } from '../../dummyData';
import Online from '../Online/Online';

export default function Rightbar({user}) {
  const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER

  const HomeRightbar= ()=>{
    return(
      <>
        <div className="eventContainer">
          <img src="assets/star.png" alt=""  className='starImg'/>
          <span className='evantText'><b>フォロワー限定</b>イベント開催中</span>
        </div>
        <img src="assets/event.jpeg" alt="" className='eventImg'/>
        <h4 className='rightbarTitle'>オンラインの友達</h4>
        <ul className='RightbarFriendList'>
          {Users.map((user)=>(
            <Online user={user} key={user.id}/>
          ))}
          
        </ul>
        <p className='promotionTitle'>プロモーション広告</p>
        <img 
        src={REACT_FOLDER+"/promotion/promotion1.jpeg" }
        alt="" 
        className='rightbarpromotionImg'
        />
        <p className='promotionName'>ショッピング</p>
        <img 
        src={REACT_FOLDER+"/promotion/promotion2.jpeg" }
        alt="" 
        className='rightbarpromotionImg'
        />
        <p className='promotionName'>カーショップ</p>
        <img 
        src={REACT_FOLDER+"/promotion/promotion3.jpeg" }
        alt="" 
        className='rightbarpromotionImg'
        />
        <p className='promotionName'>スタークインダストリーズ</p>
      </>
    )
  }

  const ProfileRigetbar=()=>{
    return (
      <>
        <h4 className='rightbarTitle'>ユーザー情報</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfokey"></span>
            <span className="rightbarInfokey"></span>
          </div>
          <h4 className='rightbarTitle'>あなたの友達</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/1.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className='rightbarFollowingName'>ゆうき</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/2.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className='rightbarFollowingName'>ゆうき</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/3.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className='rightbarFollowingName'>ゆうき</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/4.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className='rightbarFollowingName'>ゆうき</span>
            </div>
            <div className="rightbarFollowing">
              <img src={REACT_FOLDER+"/person/5.jpeg"} alt="" className='rightbarFollowingImg'/>
              <span className='rightbarFollowingName'>ゆうき</span>
            </div>
          </div>
        </div>
      </>
    )
  }
  return <div className='Rightbar'>
    <div className="RightbarWrapper">
      {user ? <ProfileRigetbar/>:<HomeRightbar/>}
    </div>
  </div>
  
}
