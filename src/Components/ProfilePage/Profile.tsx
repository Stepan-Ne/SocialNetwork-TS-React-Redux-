
import React, {ChangeEvent} from 'react';
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../App";
import {ActionTypesPrifile, addPostAC, updateNewPostTextAC} from "../../Redux/state";


type PropsProfileType = {
    state: ProfilePageType
    dispatch: (action: ActionTypesPrifile) => void
}


//COMPONENT
function Profile(props: PropsProfileType) {

    function onAddPostClick() {
       props.dispatch(addPostAC());
       props.state.newPostText = '';
    }
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget.value;
        props.dispatch(updateNewPostTextAC(text));
    }

    return (
        <div className={classes.content}>
            <h3>My Posts</h3>
            <div>
                <textarea onChange={onChangeHandler}
                          value={props.state.newPostText}>i</textarea>
            </div>
            <div>
                <button onClick={(e) => onAddPostClick()}>Add Post</button>
            </div>
            <div>
                {props.state.posts.map(p => <Post message={p.message}
                                                  likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    )
}

export default Profile;