
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

//TYPE for Dialogs
type DialogsMessagesType = {
    message: string
}
type DialogsPersonsType = {
    id: string
    name: string
}
export type DialogsDataType = {
    newMessageText: string
    dialogsPersons: Array<DialogsPersonsType>
    dialogsMessages: Array<DialogsMessagesType>
}

let initialState: DialogsDataType = {
    newMessageText: "",
    dialogsPersons: [
        {id: "1", name: "Luba"},
        {id: "2", name: "Olga"},
        {id: "3", name: "Misha"},
    ],
    dialogsMessages: [
        {message: "Hi, Dear!"},
        {message: "Ho do you do?"},
        {message: "How are you?"}
    ]
};

//ACTIONS TYPE
// export type ActionSendMessageTypes =
//     ReturnType<typeof sendMessageAC>
//     | ReturnType<typeof updateMesageAC>

const dialogsReducer = (state = initialState, action: MessageActionTypes,): DialogsDataType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageText: action.newessageText
            };
        case SEND_MESSAGE:
            let message = {message: state.newMessageText};
            state.dialogsMessages.push(message);
            state.newMessageText = "";
            return state;
        default:
            return state;
    }
};

//TYPE of AC
type SendMessageAction = {
    type: typeof SEND_MESSAGE
}
type UndateMessageAction = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    newessageText: string
}
export type MessageActionTypes = SendMessageAction | UndateMessageAction;

// export type DialogsReducerType = ReturnType<typeof dialogsReducer>


//ACTIOS CREATORS
export const sendMessageAC = (): MessageActionTypes => ({type: SEND_MESSAGE} as const);

export const updateMesageAC = (text: string): MessageActionTypes => {
   return {type: UPDATE_NEW_MESSAGE_BODY, newessageText: text} as const};

export default dialogsReducer;