import { MoreVert } from '@mui/icons-material'
import React, { useState } from 'react'
import"./Post.css"
import { Users } from '../../dummyData';
export default function Post({post}) {
    const [like,setLike]= useState(post.like);
    const [isLiked,setIsLiked]=useState(false);

    const handleLike =()=>{
        setLike(isLiked ? like -1:like +1);
        setIsLiked(!isLiked)
    }
  return (
    <div className='Post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter(user=>user.id===post.id)[0].profilePicture} alt=''className='postProfileImg'/>
                    <span className='postUsername'>{Users.filter(user=>user.id===post.id)[0].username}</span>
                    <samp className='postDare'>{post.date}</samp>
                </div>
                <div className='postTopRight'>
                    <MoreVert/>
                </div>
            </div>
            
            <div className='postCenter'>
                <span className='postText'>{post.desc}</span>
                <img src={post.photo} alt=''className='postImg'/>

            </div>
            <div className='postBottom'>
                <div className="postBottomLeft">
                    <img src='/assets/heart.png' alt=''className='likeIcon' onClick={()=>handleLike()}/>
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
