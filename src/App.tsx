import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Users} from "./Components/Users/Users";
import {Nav} from "./Components/Navbar/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import ProfileContainer from "./Components/ProfilePage/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


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

                    <Route path="/users" component={Users}/>

                    <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                </div>

            </div>
        </BrowserRouter>


    );
};

export default App;
