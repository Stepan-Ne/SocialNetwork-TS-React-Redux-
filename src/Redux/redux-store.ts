import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";

// export type dispatchApp = typeof store.dispatch;

const reducers = combineReducers({
     profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});


const store = createStore(reducers);

//export type StoreType = typeof store;
export type RootState = ReturnType<typeof reducers>
export default store;