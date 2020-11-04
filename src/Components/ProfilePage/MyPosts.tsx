import React, {ChangeEvent} from 'react';
import classes from './ProfilePage.module.css'
import {Post} from "./Post/Post";
import { ProfilePageType } from "../../Redux/profileReducer";


type PropsProfileType = {
    state: ProfilePageType
    onAddPost: () => void
    onChangePost: (text: string) => void
}


//COMPONENT
function MyPosts(props: PropsProfileType) {

    function onAddPostClick() {
        props.onAddPost();
        // props.dispatch(addPostAC());
        // props.state.profilePage.newPostText = '';
    };

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        let text = e.currentTarget.value;
        props.onChangePost(text);
        // props.dispatch(updateNewPostTextAC(text));
    };

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
                {props.state.posts.map(p => <Post message={p.message} key={p.id}
                                                  likesCount={p.likesCount} id={p.id}/>)}
            </div>
        </div>
    );
};

export default MyPosts;