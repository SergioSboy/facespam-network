import React from "react";
import classes from './MyButton.module.css'
const MyButton = (props) => {
    return (
        <div>
            <button className={classes.button} onClick={props.onClick} disabled={props.disabled}>
                {props.name}
            </button>
        </div>
    )
}

export default MyButton