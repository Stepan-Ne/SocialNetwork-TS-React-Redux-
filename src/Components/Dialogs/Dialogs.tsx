import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


type PropsType = {

}
//COMPONENT
const Dialogs: React.FC<PropsType> = (props) => {

    let dialogsPersons = [
        {id: "1", name: "Luba"},
        {id: "2", name: "Olga"},
        {id: "3", name: "Misha"},
    ]
    let dialogsMessages = [
        {message: "Hi, Dear!"},
        {message: "Ho do you do?"},
        {message: "How are you?"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                {dialogsPersons.map(p => <DialogsItem name={p.name} id={p.id}/>)}
            </div>
            <div className={s.messages}>
                {dialogsMessages.map(m =>  <Message message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
