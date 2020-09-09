import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType} from "../../App";
import {ActionTypesDialog} from "../../Redux/state";
import {sendMessageAC, updateMesageAC} from "../../Redux/dialogsReducer";

type ActionType = {
    type: string
    newText?: any
}
type PropsDialogsType = {
    state: DialogsDataType
    dispatch: (action: ActionTypesDialog) => void
}
//COMPONENT
const Dialogs: React.FC<PropsDialogsType> = (props) => {

    function sendMessage() {
        props.dispatch(sendMessageAC());
    }

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        let txt = e.currentTarget.value;
        props.dispatch(updateMesageAC(txt));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {props.state.dialogsPersons.map(p => <DialogsItem name={p.name} id={p.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.dialogsMessages.map(m => <Message message={m.message}/>)}
            </div>
            <div>
                <textarea value={props.state.newMessageText}
                          onChange={onChangeHandler}></textarea>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    )
};

export default Dialogs;
