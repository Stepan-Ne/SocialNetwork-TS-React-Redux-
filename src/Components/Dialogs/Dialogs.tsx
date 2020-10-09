import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType} from "../../Redux/dialogsReducer";

type PropsDialogsType = {
    state: DialogsDataType
    onChangeMessage: (txt: string) => void
    onSendMessage: () => void;
}
//COMPONENT
const Dialogs: React.FC<PropsDialogsType> = (props) => {

    function sendMessage() {
        props.onSendMessage();
        // props.dispatch(sendMessageAC());
    }

    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        let txt = e.currentTarget.value;
        props.onChangeMessage(txt);
        // props.dispatch(updateMesageAC(txt));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {props.state.dialogsPersons.map(p => <DialogsItem name={p.name} key={p.id} id={p.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.dialogsMessages.map(m => <Message key={m.id} message={m.message}/>)}
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
