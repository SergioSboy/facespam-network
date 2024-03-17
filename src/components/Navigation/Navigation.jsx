import React from "react";
import classes from './Navigation.module.css'
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/6915/6915987.png"/>
                <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.nav }>Profile</NavLink>
            </div>
            <div>
                <img src="https://secure.webtoolhub.com/static/resources/icons/set51/a0e45edb.png"/>
                <NavLink to='/dialogs'>Messages</NavLink>
            </div>
            <div>
                <img src="https://www.iconpacks.net/icons/1/free-user-group-icon-296-thumb.png"/>
                <a href='/users'>Users</a>
            </div>
            <div>
                <img src="https://cdn-icons-png.flaticon.com/512/3799/3799802.png"/>
                <NavLink to='#'>News</NavLink>
            </div>
            <div>
                <img src="https://www.svgrepo.com/show/224210/musical-note-music-player.svg"/>
                <NavLink to='#'>Music</NavLink>
            </div>
            <div>
                <img src="https://secure.webtoolhub.com/static/resources/icons/set98/808d3f7d.png"/>
                <a href='#'>Settings</a>
            </div>
        </nav>
    )
}

export default Navigation;