import {ActionType, StatePropsType} from "../App";
import profileReducer, {addPostAC, updateNewPostTextAC} from "./profileReducer";
import dialogsReducer, {sendMessageAC, updateMesageAC} from "./dialogsReducer";

type StoreType = {
    _state: StatePropsType
    _callsubscriber: (x: any) => void
    getState: () => StatePropsType
    subscribe: (observer: any) => void
    dispatch: (action: ActionTypes) => void
}

export type ActionTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateMesageAC>

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
    dispatch(action: ActionTypes) {

        this._state.profilePage = profileReducer(action, this._state.profilePage);
        this._state.dialogsPage = dialogsReducer(action, this._state.dialogsPage);
        this._callsubscriber(this._state);
    }

};


export default store;
