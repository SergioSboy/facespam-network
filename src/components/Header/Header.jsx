import React from "react";
import classes from './Header.module.css'
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div>
                <img src="https://cdn.icon-icons.com/icons2/1254/PNG/512/1495494673-jd04_84463.png" alt={'Logo'}/>
            </div>
            <div className={classes.c}>
                <div className={classes.input}>
                    <MyInput placeholder ='Search...' />
                </div>
                <div className={classes.button}>
                    <MyButton name={'Send'}/>
                </div>
            </div>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div> {props.login} <MyButton onClick={props.logout} name={'Logout'}/></div>
                    :<NavLink to={'/login'}>Login</NavLink>

                }

            </div>

        </div>
    )
}

export default Header;