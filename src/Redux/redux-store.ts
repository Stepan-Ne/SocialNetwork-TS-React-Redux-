import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

// export type dispatchApp = typeof store.dispatch;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers);

//window.store = store

export type StoreType = typeof store;

export default store;