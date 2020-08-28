import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType} from "../../App";


type PropsDialogsType = {
    state: DialogsDataType
}
//COMPONENT
const Dialogs: React.FC<PropsDialogsType> = (props) => {

    function sendMessage() {
        alert(txt)
    }
    let txt = '';
    function onChangeHandler(e: ChangeEvent<HTMLTextAreaElement>) {
        txt = e.currentTarget.value;
    }

    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {props.state.dialogsPersons.map(p => <DialogsItem name={p.name} id={p.id}/>)}
            </div>
            <div className={s.messages}>
                {props.state.dialogsMessages.map(m =>  <Message message={m.message}/>)}
            </div>
            <div>
                <textarea onChange={onChangeHandler}></textarea>
                <div>
                    <button onClick={sendMessage}>Send Message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;
