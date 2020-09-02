
import React, {ChangeEvent, MouseEvent} from 'react';
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../App";


type PropsProfileType = {
    state: ProfilePageType
    addPost: () => void
    updateNewPostText: (txt: string) => void
}
//COMPONENT
function Profile(props: PropsProfileType) {

    function onAddPostClick() {
       props.addPost();
       props.state.newPostText = '';
    }
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        text = e.currentTarget.value;
        props.updateNewPostText(text);
    }
    // let newPostEl = React.createRef<HTMLTextAreaElement>();
    let text = '';
    return (
        <div className={classes.content}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onChangeHandler} value={props.state.newPostText}>i</textarea>
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