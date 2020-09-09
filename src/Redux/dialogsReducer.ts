import {ActionTypes} from "./state";
import {DialogsDataType} from "../App";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

const dialogsReducer = (action: ActionTypes, state: DialogsDataType) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageText = action.newessageText;
            return state;
        case SEND_MESSAGE:
            let message = {message: state.newMessageText};
            state.dialogsMessages.push(message);
            state.newMessageText = "";
            return state;
        default:
            return state;
    }
};

export const sendMessageAC = () => ({type: SEND_MESSAGE} as const);
export const updateMesageAC = (text: string) => ({type: UPDATE_NEW_MESSAGE_BODY, newessageText: text} as const);
export default dialogsReducer;