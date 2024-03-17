import React from 'react';
import preloader from "../../../assets/images/4.svg";

const Preloader = () => {
    return (
        <div>
            <img alt={'preloader'} src={preloader} width="50px" height="50px"/>
        </div>
    );
};

export default Preloader;