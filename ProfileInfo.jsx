import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img
                    src='https://media.radissonhotels.net/image/destination-pages/localattraction/16256-118729-f63245316_3xl.jpg?impolicy=HighCarrousel'
                    alt='anna'/>
            </div>
            <div className = {s.descriptionBlock}>
                ava + destination
            </div>
        </div>
    )
}

export default ProfileInfo;