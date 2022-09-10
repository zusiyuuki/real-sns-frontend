
import React, { useContext, useEffect, useState } from 'react';

import Share from '../Share/Share';
import "./TimeLine.css";

import axios from "axios";
import Post from '../Post/Post';
import { AuthContext } from '../../state/AuthContext';

export default function TimeLine({username}) {
  const [posts,setPost]=useState([]);
  const {user} =useContext(AuthContext);

  useEffect(()=>{
    const fetchPosts = async () =>{
    const resoinse =username 
    ? await axios.get(`/post/profile/${username}`) 
    : await axios.get(`/post/timeline/${user._id}`);
    //console.log(resoinse);
    setPost(
      resoinse.data.sort((post1,post2)=>{
        return new Date(post2.createdAt)- new Date(post1.createdAt);
      })
     );
    };
    fetchPosts();
  },[username,user._id]);

  return (
    <div className='TimeLine'>
      <div className="timelineWrapper">
        <Share/>
        {posts.map((post)=>(
          <Post post={post} key={post._id}/>
        ))};
      </div>
    </div>
  )
}
