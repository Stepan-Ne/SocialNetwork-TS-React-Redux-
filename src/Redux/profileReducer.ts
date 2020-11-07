import { ProfileType } from './../Components/ProfilePage/ProfileContainerConnect'

type stateType = {
    profile: ProfileType | null
    newPostText: string
}
const initialState: stateType = {
    profile: null,
    newPostText: ''
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

//ALL_ACTIONS_TYPE
type AllActionsType = updatePostTextType | SetProfileType

export default profileReducer;