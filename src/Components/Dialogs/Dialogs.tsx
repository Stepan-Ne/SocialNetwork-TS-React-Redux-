import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    name: string
    id: number
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

    let dialogsData = [
        {id: "1", name: "Luba"}
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.persons}>
                <DialogsItem name="Luba" id={1}/>
                <DialogsItem name="Olga" id={2}/>
                <DialogsItem name="Misha" id={3}/>
            </div>
            <div className={s.messages}>
               <MessageItem message="Hi, Dear!"/>
               <MessageItem message="Hello!"/>
               <MessageItem message="How are you?"/>

            </div>
        </div>
    )
}

export default Dialogs;
