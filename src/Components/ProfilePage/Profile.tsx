import React from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";
import {PostDataTypeElement} from "../../App";

type PropsProfileType = {
    postsData: Array<PostDataTypeElement>
}
//COMPONENT
function Profile(props: PropsProfileType) {


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
                {props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    )
}

export default Profile;