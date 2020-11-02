import React from "react";
import s from "../../Users/Users.module.css";

type PreloaderPropsType = {
    isFetching: boolean
}

const  Preloader = (props: PreloaderPropsType) => {
    return  <div className={props.isFetching ? s.ldsEllipsis : ''}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
}

export default Preloader;