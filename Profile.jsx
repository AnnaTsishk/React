import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";



const Profile = (props) => {
    return (<div>
            <ProfileInfo />
            <div > ava + destination </div>
            <MyPosts />
        </div>)
}
export default Profile;