import React, { ChangeEvent, KeyboardEvent } from 'react'
import classes from './ProfilePage.module.css'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux/redux-store'
import {
  updatePostText,
  addPost,
  stateType,
  PostType,
  like,
} from '../../../Redux/profileReducer'
import Post from './Post/Post'

type MyPostsPropsType = {
  myPostsData: stateType
  updatePostText: (text: string) => void
  addPost: () => void
  like: (likesCount: string, idPost: string) => void
}

//MyPosts COMPONENT
const MyPosts = (props: MyPostsPropsType) => {
  function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    let text = e.currentTarget.value
    props.updatePostText(text)
    // props.dispatch(updateNewPostTextAC(text));
  }
  function onAddPostClick() {
    props.addPost()
    // props.dispatch(addPostAC());
    // props.state.profilePage.newPostText = '';
  }
  function handlerKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      props.addPost()
    }
  }

  return (
    <div>
      <h2>My Posts</h2>
      <textarea
        autoFocus
        onChange={onChangeHandler}
        onKeyDown={handlerKeyDown}
        value={props.myPostsData.newPostText}
      ></textarea>
      <div>
        <button onClick={(e) => onAddPostClick()}>Send Post</button>
        <div>
          {props.myPostsData.posts.map((p: PostType) => (
            <Post
              message={p.text}
              key={p.id}
              likesCount={p.likesCount}
              id={p.id}
              like={props.like}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    myPostsData: state.profilePage,
  }
}
const dispatchProps = {
  updatePostText,
  addPost,
  like,
}
const MyPostsContainerConnect = connect(mapStateToProps, dispatchProps)(MyPosts)

export default MyPostsContainerConnect
