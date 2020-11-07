import React, {ChangeEvent} from 'react';
import classes from './ProfilePage.module.css';
import {connect} from "react-redux";
import { RootState } from "../../../Redux/redux-store";
import {updatePostText} from '../../../Redux/profileReducer'

type MyPostsPropsType = {
  newPostText: string
  updatePostText: (text: string) => void
}
const MyPosts = (props: MyPostsPropsType) => {

  function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
    let text = e.currentTarget.value;
    props.updatePostText(text);
    // props.dispatch(updateNewPostTextAC(text));
};
function onAddPostClick() {
 // props.onAddPost();
  // props.dispatch(addPostAC());
  // props.state.profilePage.newPostText = '';
};
  return (
    <div>
      <h2>My Posts</h2>
      <textarea onChange={onChangeHandler}
      value={props.newPostText}></textarea>
      <div>
      <button onClick={(e) => onAddPostClick()}>Send Post</button>
  <p>New text: {props.newPostText}</p>
      </div>
    </div>
  )
};

const mapStateToProps = (state: RootState) => {
  return {
      newPostText: state.profilePage.newPostText
  }
}
const MyPostsContainerConnect = connect(mapStateToProps, {updatePostText})(MyPosts);

export default MyPostsContainerConnect;