import React from "react";
import classes from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: string
    id: string
}

export function Post(props: PostPropsType) {
    return (
        <div className={classes.item}>
            <p>{props.message}</p>
            <div>
                <span>Likes: {props.likesCount}</span>
            </div>
        </div>
    )
}