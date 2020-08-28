import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import Profile from "./Components/ProfilePage/Profile";
import {Users} from "./Components/Users/Users";
import {Nav} from "./Components/Navbar/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {v1} from "uuid";
import Dialogs from "./Components/Dialogs/Dialogs";

//TYPE for Dialogs
type DialogsMessagesType = {
    message: string
}
type DialogsPersonsType = {
    id: string
    name: string
}
export type DialogsDataType = {
    dialogsPersons: Array<DialogsPersonsType>
    dialogsMessages: Array<DialogsMessagesType>
}
//TYPE for Posts
export type PostTypeElement = {
    id: string
    message: string
    likesCount: string
}
export type ProfilePageType = {
    posts: Array<PostTypeElement>
    addPost(postText: string): void;
}
//TYPE of STATE
export type StatePropsType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsDataType
}
type PropsType = {
    state: StatePropsType
}

const App: React.FC<PropsType> = (props) => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile state={props.state.profilePage} />}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogsPage}/>}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;
