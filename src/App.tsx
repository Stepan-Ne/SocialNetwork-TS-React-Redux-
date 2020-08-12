import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Profile} from "./Components/ProfilePage/Profile";
import {Users} from "./Components/Users/Users";
import {Nav} from "./Components/Navbar/Nav";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <div className="content">
                <Profile/>
                {/*<Users/>*/}
            </div>

        </div>
    );
}
export default App;
