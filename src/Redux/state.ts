import {ActionType} from "../App";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: "1", message: "Hi! How are you?", likesCount: "0"},
                {id: "2", message: "Nice to meet you!", likesCount: "10"},
            ],
            newPostText: "",

        },
        dialogsPage: {
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
    _callsubscriber(x: any) {
        console.log("State changed")
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callsubscriber = observer;
    },
    dispatch(action: ActionType) {
        if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callsubscriber(this._state);
        } else if(action.type === "ADD-POST") {
            this._state.profilePage.posts.push(
                {id: "3", message: this._state.profilePage.newPostText, likesCount: "0"}
            );
            this._state.profilePage.newPostText = "";
            this._callsubscriber(this._state);
        }
    }

};



export default store;
// addPost() {
//     this._state.profilePage.posts.push(
//         {id: "3", message: this._state.profilePage.newPostText, likesCount: "0"}
//     );
//     this._state.profilePage.newPostText = "";
//     this._callsubscriber(this._state);
// },
// updateNewPostText(txt: string) {
//     this._state.profilePage.newPostText = txt;
//     this._callsubscriber(this._state);
// },