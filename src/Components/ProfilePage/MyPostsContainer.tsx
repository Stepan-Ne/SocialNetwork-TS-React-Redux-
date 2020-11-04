import React, {Dispatch} from 'react';
import {addPostAC, MessageActionTypes, updateNewPostTextAC} from "../../Redux/profileReducer";
import {RootState} from "../../Redux/redux-store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

function mapDispatchToProps(dispatch: Dispatch<MessageActionTypes>) {
    return {
        onChangePost: (text: string) => {
            dispatch(updateNewPostTextAC(text));
        },
        onAddPost: () => {
            dispatch(addPostAC());
        }
    }
}
function mapStateToProps(state: RootState) {
    return {
        state: state.profilePage
    }
}

export default MyPostsContainer;