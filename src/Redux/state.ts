import {ActionType, StatePropsType} from "../App";
const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

type StoreType = {
    _state: StatePropsType
    _callsubscriber: (x: any) => void
    getState: () => StatePropsType
    subscribe: (observer: any) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC> | ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMesageAC>

export type ActionTypesPrifile = ReturnType<typeof addPostAC> | ReturnType<typeof updateNewPostTextAC>
export type ActionTypesDialog = ReturnType<typeof sendMessageAC> | ReturnType<typeof updateMesageAC>

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi! How are you?", likesCount: "0"},
                {id: "2", message: "Nice to meet you!", likesCount: "10"},
            ],
            newPostText: "",

        },
        dialogsPage: {
            newMessageText: "",
            dialogsPersons: [
                {id: "1", name: "Luba"},
                {id: "2", name: "Olga"},
                {id: "3", name: "Misha"},
            ],
            dialogsMessages: [
                {message: "Hi, Dear!"},
                {message: "Ho do you do?"},
                {message: "How are you?"}
            ]
        },
    },
    _callsubscriber(x) {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callsubscriber = observer;
    },
    dispatch(action: ActionType) {
        if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state);
        } else if(action.type === ADD_POST) {
            if (this._state.profilePage.newPostText.trim()) {
                this._state.profilePage.posts.push(
                    {id: "3", message: this._state.profilePage.newPostText, likesCount: "0"}
                );
                this._state.profilePage.newPostText = "";
                this._callsubscriber(this._state);
            } else {
                alert("Oups!")
            }
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callsubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let message = {message: this._state.dialogsPage.newMessageText};
            this._state.dialogsPage.dialogsMessages.push(message);
            this._state.dialogsPage.newMessageText = "";
            this._callsubscriber(this._state);
        }
    }

};


export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text} as const);
export const sendMessageAC = () => ({type: SEND_MESSAGE});
export const updateMesageAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, newText: text});
export default store;
