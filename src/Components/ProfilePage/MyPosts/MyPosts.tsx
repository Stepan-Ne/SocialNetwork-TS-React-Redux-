import React, { ChangeEvent } from 'react'
import classes from './ProfilePage.module.css'
import { connect } from 'react-redux'
import { RootState } from '../../../Redux/redux-store'
import { updatePostText, addPost, stateType, PostType } from '../../../Redux/profileReducer'
import Post from './Post/Post'

type MyPostsPropsType = {
  myPostsData: stateType
  updatePostText: (text: string) => void
  addPost: () => void
}
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
  return (
    <div>
      <h2>My Posts</h2>
      <textarea
        onChange={onChangeHandler}
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
            />
          ))}
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  
  return {
    myPostsData: state.profilePage
  }
}
const dispatchProps = {
  updatePostText,
  addPost,
}
const MyPostsContainerConnect = connect(mapStateToProps, dispatchProps)(MyPosts)

export default MyPostsContainerConnect
