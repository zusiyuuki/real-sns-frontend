import { MoreVert } from '@mui/icons-material'
import { AuthContext } from '../../state/AuthContext';
import"./Post.css"
import axios from "axios";
import React, { useContext, useEffect, useState } from 'react';
//import { Users } from '../../dummyData';
import {format}from "timeago.js";
import { Link } from 'react-router-dom';
export default function Post({post}) {
    const REACT_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

    const [like,setLike]= useState(post.likes.length);
    const [isLiked,setIsLiked]=useState(false);
    const [User,setUser]=useState({});

    const { user: currentUser } = useContext(AuthContext);


  useEffect(()=>{
    const fetchUser = async () =>{
    const resoinse =await axios.get(`/users?userId=${post.userId}`);
    
    setUser(resoinse.data);
    };
    fetchUser();
  },[post.userId]);

  const handleLike = async () => {
    try {
      //いいねのAPIを叩く
      await axios.put(`/post/${post._id}/like`, { userId: currentUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  return (
    <div className='Post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <Link to={`/profile/${User.username}`}>
                    <img src={User.profilePicture
                    ?REACT_FOLDER+User.profilePicture
                    :REACT_FOLDER+"/person/noAvatar.png"}
                        alt=''className='postProfileImg'/>
                    </Link>
                    <span className='postUsername'>{User.username}</span>
                    <samp className='postDare'>{format(post.createdAt)}</samp>
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
            </div>
            
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>
                <img src={REACT_FOLDER+post.img} alt=''className='postImg'/>

            </div>
            <div className='postBottom'>
                <div className="postBottomLeft">
                    <img src={REACT_FOLDER+'/heart.png'} alt=''className='likeIcon' onClick={()=>handleLike()}/>
                    <span className="postlikeCounter">
                        {like}人がいいねを押しました
                    </span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">
                        {post.comment}
                    </span>
                </div>

            </div>
        </div>
    </div>
  )
}
