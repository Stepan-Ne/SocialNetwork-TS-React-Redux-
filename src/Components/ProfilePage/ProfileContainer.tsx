import React, {ChangeEvent, Dispatch} from 'react';
import {addPostAC, MessageActionTypes, updateNewPostTextAC} from "../../Redux/profileReducer";
import {RootState} from "../../Redux/redux-store";
import Profile from "./Profile";
import {connect} from "react-redux";


const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

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

export default ProfileContainer;