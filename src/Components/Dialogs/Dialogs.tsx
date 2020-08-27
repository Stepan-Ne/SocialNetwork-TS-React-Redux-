import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsDataType} from "../../App";


type PropsDialogsType = {
    dialogsData: DialogsDataType
}
//COMPONENT
const Dialogs: React.FC<PropsDialogsType> = (props) => {


    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {props.dialogsData.dialogsPersons.map(p => <DialogsItem name={p.name} id={p.id}/>)}
            </div>
            <div className={s.messages}>
                {props.dialogsData.dialogsMessages.map(m =>  <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
