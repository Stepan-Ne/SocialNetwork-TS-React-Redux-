
import React, {ChangeEvent, MouseEvent} from 'react';
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../App";


type PropsProfileType = {
    state: ProfilePageType
}
//COMPONENT
function Profile(props: PropsProfileType) {

    function onAddPostClick() {
       props.state.addPost(text);
    }
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        text = e.currentTarget.value;
    }
    // let newPostEl = React.createRef<HTMLTextAreaElement>();
    let text = '';
    return (
        <div className={classes.content}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onChangeHandler} placeholder={'your new post'}>i</textarea>
            </div>
            <div>
                <button onClick={(e) => onAddPostClick()}>Add Post</button>
            </div>
            <div>
                {props.state.posts.map(p => <Post message={p.message} likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    )
}

export default Profile;