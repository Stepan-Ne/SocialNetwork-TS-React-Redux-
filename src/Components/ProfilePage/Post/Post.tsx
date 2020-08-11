import React from "react";
import classes from "./Post.module.css";

type PropsType = {
    message: string
    like: number
}
export function Post(props: PropsType) {
    return (
        <div className={classes.item}>
            {props.message}
            <div>
                <span>Likes {props.like}</span>
            </div>
        </div>
    )
}