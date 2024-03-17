import React from "react";
import classes from './MyInput.module.css'

const MyInput = (props) => {
    return (

        <input
            ref={props.ref}
            autoFocus={true}
            onBlur={props.onBlur}
            className={classes.input}
            type="text"
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
        />

    )
}

export default MyInput