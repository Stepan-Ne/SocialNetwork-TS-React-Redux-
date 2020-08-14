import React from "react";
import classes from "./Post.module.css";
import {MessageType, PropsType} from "../Profile";


export function Post(props: MessageType) {
    return (
        <div className={classes.item}>
            {props.text}
            <div>
                <span>Likes {props.likesCount}</span>
            </div>
        </div>
    )
}