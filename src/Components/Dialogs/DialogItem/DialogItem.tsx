import React from "react";
import s from "./../Dialogs.module.css";
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

export default DialogsItem;
