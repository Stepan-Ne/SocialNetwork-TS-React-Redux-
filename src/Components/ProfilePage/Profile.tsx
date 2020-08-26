import React from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";


//COMPONENT
function Profile() {

    let postsData = [
        {id: "1", message: "Hi! How are you?", likesCount: "0"},
        {id: "2", message: "Nice to meet you!", likesCount: "10"}
    ]

    return (
        <div className={classes.content}>
            <h3>My Posts</h3>
            <div>
                <textarea placeholder={'your new post'}>i</textarea>
            </div>
            <div>
                <button>Add Post</button>
            </div>
            <div>
                {postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    )
}

export default Profile;