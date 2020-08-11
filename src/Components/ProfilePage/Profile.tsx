import React from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";

export function Profile() {
    return (
        <div className={classes.content}>
            <h3>My Posts</h3>
            <textarea placeholder={'your new post'}></textarea>
            <button>Add Post</button>
            <Post message={'Hello! How are you?'} like={1}/>
            <Post message={'It is Ok!'} like={2}/>
        </div>
    )
}

