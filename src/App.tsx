import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Nav} from "./Components/Navbar/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import ProfileContainer from "./Components/ProfilePage/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";


// type PropsType = {
//     store: StoreType
//     state: RootState
//     dispatch: any
// }

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path="/profile" render={() => <ProfileContainer/>}/>

                    <Route path="/users" render={() => <UsersContainer/>}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                </div>

            </div>
        </BrowserRouter>


    );
};

export default App;
