import {rerenderTree} from "../render";

let state = {
    profilePage: {
        posts:  [
            {id: "1", message: "Hi! How are you?", likesCount: "0"},
            {id: "2", message: "Nice to meet you!", likesCount: "10"},
        ],
        addPost() {
            this.posts.push(
                {id: "3", message: this.newPostText, likesCount: "0"}
            );
            rer()
        },
        newPostText: "",
        updateNewPostText(txt: string) {
            this.newPostText = txt;
            rer()
        }
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
    }
}
let rer = () => rerenderTree(state)
export default state;