import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Navbar/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainerConnect from "./Components/Users/UsersContainerConnect";
import ProfileContainerConnect from "./Components/ProfilePage/ProfileContainerConnect/ProfileContainerConnect";





const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path="/profile" render={() => <ProfileContainerConnect/>}/>

                    <Route path="/users" render={() => <UsersContainerConnect/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                </div>

            </div>
        </BrowserRouter>


    );
};

export default App;
