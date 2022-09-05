
import React from 'react';
import Post from '../Post/Post';
import Share from '../Share/Share';
import "./TimeLine.css";
import { Posts } from '../../dummyData';

export default function TimeLine() {
  return (
    <div className='TimeLine'>
      <div className="timelineWrapper">
        <Share/>
        {Posts.map((post)=>(
          <Post post={post} key={post.id}/>
        ))}
      </div>
    </div>
  )
}
