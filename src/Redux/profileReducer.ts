import { ProfileType } from './../Components/ProfilePage/ProfileContainerConnect'

export type PostType = {
    id: string,
    text: string
    likesCount: string
}
export type stateType = {
    profile: ProfileType | null
    newPostText: string
    posts: Array<PostType>
}
const initialState: stateType = {
    profile: null,
    newPostText: '',
    posts: [
        {id: '1', text: 'There is the fist post on this page', likesCount: "0"}
    ]
}
function profileReducer (state = initialState, action: AllActionsType) {

    switch(action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
            case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newPostText
            };
            case ADD_POST:
                if (state.newPostText.trim()) {
                    let newId = Date.now().toString();
                    return {
                        ...state,
                        newPostText: "",
                        posts: [...state.posts,
                            {id: newId, message: state.newPostText, likesCount: 0} ]
                    }
                 } else {
                    alert("Oups!")
                 };
            default:
        return state;
    }

};

//SET_PROFILE AC
const SET_PROFILE = 'SET_PROFILE';
type SetProfileType = {
    type: typeof SET_PROFILE
    profile: ProfileType | null
}
export const setProfile = (profile: ProfileType): SetProfileType => {
  return {
    type: SET_PROFILE,
    profile,
  }
};

//UPDATE_POST_TEXT AC
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
type updatePostTextType = {
    type: typeof UPDATE_POST_TEXT
    newPostText: string
}
export const updatePostText = (newPostText: string): updatePostTextType => {
  return {
    type: UPDATE_POST_TEXT,
    newPostText,
  }
};

//ADD_POST AC
const ADD_POST = 'ADD_POST';
type AddPostType = {
    type: typeof ADD_POST
}
export const addPost = (): AddPostType => {
  return {
    type: ADD_POST
  }
};

//ALL_ACTIONS_TYPE
type AllActionsType = updatePostTextType | SetProfileType | AddPostType;

export default profileReducer;