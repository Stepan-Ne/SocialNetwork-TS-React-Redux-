import {createStore, combineReducers} from "redux";
import profileReducer, {ProfileReducerType} from "./profileReducer";
import dialogsReducer, {DialogsReducerType} from "./dialogsReducer";

// export type dispatchApp = typeof store.dispatch;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer});

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers);



export default store;