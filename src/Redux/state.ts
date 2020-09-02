
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
    getState() {
        return this._state;
    },
    rerenderTree(x: any) {
        console.log("State changed")
    },
    addPost() {
        this._state.profilePage.posts.push(
            {id: "3", message: this._state.profilePage.newPostText, likesCount: "0"}
        );
        this._state.profilePage.newPostText = "";
        this.rerenderTree(this._state);
    },
    updateNewPostText(txt: string) {
        this._state.profilePage.newPostText = txt;
        this.rerenderTree(this._state);
    },
    subscribe(observer: any) {
        this.rerenderTree = observer;
    }
}

// let state = {
//     profilePage: {
//         posts:  [
//             {id: "1", message: "Hi! How are you?", likesCount: "0"},
//             {id: "2", message: "Nice to meet you!", likesCount: "10"},
//         ],
//         addPost() {
//             this.posts.push(
//                 {id: "3", message: this.newPostText, likesCount: "0"}
//             );
//             rer()
//         },
//         newPostText: "",
//         updateNewPostText(txt: string) {
//             this.newPostText = txt;
//             rer()
//         }
//     },
//     dialogsPage: {
//         dialogsPersons: [
//             {id: "1", name: "Luba"},
//             {id: "2", name: "Olga"},
//             {id: "3", name: "Misha"},
//         ],
//         dialogsMessages: [
//             {message: "Hi, Dear!"},
//             {message: "Ho do you do?"},
//             {message: "How are you?"}
//         ]
//     }
// }

export default store;