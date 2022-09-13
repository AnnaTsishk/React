import React from 'react';
import s from './Post.module.css';

const Post = (props) => {

  return (
  <div>

         <div className ={s.item}>
           <img src='https://st.violity.com/auction/big/auctions/13/3/48/7/130348766.jpg' />
                <p>{props.message}</p>  
                <p><span> like </span> {props.likesCount}</p> 
           </div>
  </div>

  )    
}
    
export default Post;