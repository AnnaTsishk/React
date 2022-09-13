import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import Profile from "../Profile";


const MyPosts = (props) => {
  return (
  <div>
    <Profile />
      My posts
        <p><textarea></textarea></p>
      <p> <button> Add post </button></p>
  
      <div className ={s.posts}>
      </div>  
      <Post message = 'Hi, how are you?' likesCount = '0'/>
      <Post message = "Tt's my first post!" likesCount = '23'/>
  </div>
  )       

}
    
export default MyPosts;