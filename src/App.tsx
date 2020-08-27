import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import Profile from "./Components/ProfilePage/Profile";
import {Users} from "./Components/Users/Users";
import {Nav} from "./Components/Navbar/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {v1} from "uuid";
import Dialogs from "./Components/Dialogs/Dialogs";


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
export type PostDataTypeElement = {
    id: string
    message: string
    likesCount: string
}
type StatePropsType = {
    postsData: Array<PostDataTypeElement>
    dialogsData: DialogsDataType
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
                    <Route path="/profile" render={() => <Profile postsData={props.state.postsData} />}/>
                    <Route path="/users" component={Users}/>
                    <Route path="/dialogs" render={() => <Dialogs dialogsData={props.state.dialogsData}/>}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;
