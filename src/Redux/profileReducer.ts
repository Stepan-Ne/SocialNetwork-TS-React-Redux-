
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

//TYPE for Posts
export type PostTypeElement = {
    id: string
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostTypeElement>
    newPostText: string
    profile: any
}
let initialState: ProfilePageType = {
    posts: [
        {id: "1", message: "Hi! How are you?", likesCount: "0"},
        {id: "2", message: "Nice to meet you!", likesCount: "10"},
    ],
    newPostText: "",
    profile: null
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
        default:
            return state;
    }


};


export type ProfileReducerType = ReturnType<typeof profileReducer>
interface AddPostAction {
    type: typeof ADD_POST
}
interface UndatePostAction {
    type: typeof UPDATE_NEW_POST_TEXT
    newPostText: string
}
export type MessageActionTypes = AddPostAction | UndatePostAction;


export const addPostAC = (): MessageActionTypes => ({type: ADD_POST} as const);

export const updateNewPostTextAC = (text: string): MessageActionTypes => {
    debugger
    return {type: UPDATE_NEW_POST_TEXT, newPostText: text} as const};

export default profileReducer;