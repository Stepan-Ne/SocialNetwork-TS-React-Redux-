import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, {StatePropsType} from './App';
import * as serviceWorker from './serviceWorker';
import store from './Redux/state';



let rerenderTree = (state: StatePropsType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} dispatch={store.dispatch.bind(store)}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};
rerenderTree(store.getState());
store.subscribe(rerenderTree);
// ReactDOM.render(
//   <React.StrictMode>
//     <App state={state} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
