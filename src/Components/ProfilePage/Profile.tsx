import React, {ChangeEvent, Dispatch} from 'react';
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";
// import {ProfilePageType} from "../../App";
// import {ActionTypesProfile} from "../../Redux/store";
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../Redux/profileReducer";
import {RootState} from "../../Redux/redux-store";


type PropsProfileType = {
    state: RootState
    dispatch: any
}


//COMPONENT
function Profile(props: PropsProfileType) {

    function onAddPostClick() {
        props.dispatch(addPostAC());
        props.state.profilePage.newPostText = '';
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
                          value={props.state.profilePage.newPostText}>i</textarea>
            </div>
            <div>
                <button onClick={(e) => onAddPostClick()}>Add Post</button>
            </div>
            <div>
                {props.state.profilePage.posts.map(p => <Post message={p.message}
                                                  likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    )
}

export default Profile;