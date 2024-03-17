import React, {useEffect} from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {useNavigate} from "react-router-dom";


const Profile = (props) => {
    let navigate = useNavigate()
    useEffect(() => {
        if (props.isAuth === false) {
            return navigate("../login")
        }
    }, [props.isAuth])
    return (

        <div>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;