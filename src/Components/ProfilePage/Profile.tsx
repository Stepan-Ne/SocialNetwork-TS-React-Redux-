import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import classes from "./ProfilePage.module.css";
import {Post} from "./Post/Post";

export type MessageType = {
    id: string
    text: string
    likesCount: number
}
export type PropsType = {
    messages: Array<MessageType>
    addPost: (value: string) => void
}

//COMPONENT
export function Profile(props: PropsType) {
    // Local State
    const [newPostText, setNewPostText] = useState('')

    //OnChangeHandler
    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewPostText(e.currentTarget.value);
    }
    //onKeyPressHandler
    const onKeyPressHandler = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.charCode === 13) {
            props.addPost(newPostText)
            setNewPostText('')
        }
    }

    //Add Post
    function onAddPost() {
        props.addPost(newPostText)
        setNewPostText('')
    }

    //POSTS
    let posts = props.messages.map(m => <Post key={m.id} text={m.text} likesCount={m.likesCount} id={m.id}/>)

    return (
        <div className={classes.content}>
            <h3>My Posts</h3>
            <textarea placeholder={'your new post'} value={newPostText}
                      onChange={onChangeHandler}
                      onKeyPress={onKeyPressHandler}>i</textarea>
            <button onClick={onAddPost}>Add Post</button>
            <div>
                {posts}
            </div>
        </div>
    )
}



