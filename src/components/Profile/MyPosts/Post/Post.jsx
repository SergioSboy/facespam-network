import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={classes.item}>
                <img src={props.img} alt="user photo"/>
                <b>
                    {props.message}
                </b>

            </div>
        </div>
    )
}

export default Post;