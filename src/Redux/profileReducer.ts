import {ActionTypes} from "./state";
import {ProfilePageType} from "../App";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (action: ActionTypes, state: ProfilePageType) => {
    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newPostText;
            return state;
        case ADD_POST:
            if (state.newPostText.trim()) {
                state.posts.push(
                    {id: "3", message: state.newPostText, likesCount: "0"}
                );
                state.newPostText = "";
            } else {
                alert("Oups!")
            }
            return state;
        default:
            return state;
    }


}

export const addPostAC = () => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (text: string) => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text} as const
};
export default profileReducer;