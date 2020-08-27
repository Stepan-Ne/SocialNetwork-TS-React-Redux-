import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let state = {
    postsData:  [
        {id: "1", message: "Hi! How are you?", likesCount: "0"},
        {id: "2", message: "Nice to meet you!", likesCount: "10"},
    ],
    dialogsData: {
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

ReactDOM.render(
  <React.StrictMode>
    <App state={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
