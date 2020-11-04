
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_PROFILE_INFO = 'SET_PROFILE_INFO';

//TYPE for Posts
export type PostTypeElement = {
    id: string
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostTypeElement>
    newPostText: string
    profile: string
}
let initialState: ProfilePageType = {
    posts: [
        {id: "1", message: "Hi! How are you?", likesCount: "0"},
        {id: "2", message: "Nice to meet you!", likesCount: "10"},
    ],
    newPostText: "",
    profile: ""
};
// export type ActionAddPostTypes =
//     ReturnType<typeof addPostAC>
//     | ReturnType<typeof updateNewPostTextAC>

const profileReducer = (state = initialState, action: MessageActionTypes): ProfilePageType => {

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
        case ADD_POST:
            if (state.newPostText.trim()) {
                return {
                    ...state,
                    newPostText: "",
                    posts: [...state.posts,
                        {id: "3", message: state.newPostText, likesCount: "0"} ]
                }
             } else {
                alert("Oups!")
            };
        case SET_PROFILE_INFO:
            return {
                ...state,
               // profile: action
            };
        default:
            return state;
    }


};

//Types
export type ProfileReducerType = ReturnType<typeof profileReducer>
interface AddPostAction {
    type: typeof ADD_POST
}
interface UndatePostAction {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}
interface SetProfileInfoType {
    type: typeof SET_PROFILE_INFO
    profile: string
}
export type MessageActionTypes = AddPostAction | UndatePostAction | SetProfileInfoType;

//Actions
export const addPostAC = (): AddPostAction => ({type: ADD_POST} as const);
export const updateNewPostTextAC = (text: string): UndatePostAction => {
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text} as const};
export const setPofileInfo = (profile: string): SetProfileInfoType => {
    return {type: SET_PROFILE_INFO, profile}
};

export default profileReducer;