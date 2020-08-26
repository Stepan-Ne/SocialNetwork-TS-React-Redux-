import React from "react";
import s from "./../Dialogs.module.css";




type MessageItemType = {
    message: string
}
const Message: React.FC<MessageItemType> = (props) => {
    return  <div className={s.message}>
        {props.message}
    </div>
}


export default Message;
