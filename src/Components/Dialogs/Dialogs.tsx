import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: string
}
const DialogsItem: React.FC<DialogsItemPropsType> = (props) => {
    return <div className={s.person + " " + s.active}>
        <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
    </div>
}

type MessageItemType = {
    message: string
}
const MessageItem: React.FC<MessageItemType> = (props) => {
    return  <div className={s.message}>
        {props.message}
    </div>
}


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
                {dialogsMessages.map(m =>  <MessageItem message={m.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;
