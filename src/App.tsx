import React, {useState} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {MessageType, Profile} from "./Components/ProfilePage/Profile";
import {Users} from "./Components/Users/Users";
import {Nav} from "./Components/Navbar/Nav";
import {BrowserRouter, Route} from 'react-router-dom';
import {v1} from "uuid";


function App() {

    // Global State
    const [Posts, setPosts] = useState<Array<MessageType>>([
        {id: v1(), text: "'Hello! How are you?", likesCount: 1}
    ])
    //add message
    let messages = Posts;

    function addPost(value: string) {
        let newPost: MessageType = {id: v1(), text: value, likesCount: 0}
        setPosts([newPost, ...Posts])
    }

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Nav/>
                <div className="content">
                    <Route path="/profile" render={() => <Profile addPost={addPost} messages={messages}/>}/>
                    <Route path="/users" component={Users}/>
                </div>

            </div>
        </BrowserRouter>


    );
}

export default App;
