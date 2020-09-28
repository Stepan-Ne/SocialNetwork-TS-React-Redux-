import React, {ChangeEvent, Dispatch} from 'react';
import {addPostAC, ProfilePageType, updateNewPostTextAC} from "../../Redux/profileReducer";
import {RootState, StoreType} from "../../Redux/redux-store";
import Profile from "./Profile";


type PropsProfileType = {
    store: StoreType
}


//COMPONENT
function ProfileContainer(props: PropsProfileType) {

    let state = props.store.getState().profilePage;

    function onAddPostClick() {
        props.store.dispatch(addPostAC());
        state.newPostText = '';
    };

    function onChangeHandler(text: string) {
        props.store.dispatch(updateNewPostTextAC(text));
    };

    return <Profile state={state} onChangePost={onChangeHandler} onAddPost={onAddPostClick}/>
};

export default ProfileContainer;