import React from "react";
import { sendMessageAC, updateMesageAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/redux-store";

type PropsDialogsType = {
    store: StoreType
}
//COMPONENT
const DialogsContainer: React.FC<PropsDialogsType> = (props) => {

    let state = props.store.getState().dialogsPage;

    function sendMessage() {
        props.store.dispatch(sendMessageAC());
    }

    function onChangeHandler(txt: string) {
        props.store.dispatch(updateMesageAC(txt));
    }

    return <Dialogs onChangeMessage={onChangeHandler} onSendMessage={sendMessage}
    state={state}/>
};

export default DialogsContainer;
