import React from 'react'
import classes from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    const mainPhotoSelected = (e) => {
        if (e.target.files.length){
            props.savePhoto(e.target.files[0])
        }
    }
    return (
        <div>
            <div>
                <img alt="description of image" className={classes.content__img} src='https://i.stack.imgur.com/SvWWN.png'/>
            </div>
            <div>
                <img alt={'avatar'} src={props.profile.photos.large || userPhoto} className={classes.photo}/>
                {props.profile.fullName}
            </div>
            <div>
                {props.isOwner && <input type={'file'} onChange={mainPhotoSelected}/>}
                <ProfileStatusWithHooks isOwner={props.isOwner} status={props.status} updateStatus={props.updateStatus}/>
                CONTACT:
            </div>
            <div>
                facebook: {props.profile.contacts.facebook}
            </div>
        </div>
    )
}

export default ProfileInfo;