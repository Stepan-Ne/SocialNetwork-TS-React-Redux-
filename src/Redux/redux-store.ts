import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

// export type dispatchApp = typeof store.dispatch;

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer});

export type RootState = ReturnType<typeof reducers>

let store = createStore(reducers);

export type StoreType = typeof store;

export default store;