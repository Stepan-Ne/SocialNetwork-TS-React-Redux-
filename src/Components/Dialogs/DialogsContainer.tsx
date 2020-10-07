import React, {Dispatch} from "react";
import {MessageActionTypes, sendMessageAC, updateMesageAC} from "../../Redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {RootState} from "../../Redux/redux-store";
import {connect} from "react-redux";

//CONTAINER from react-redux
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

function mapDispatchToProps(dispatch: Dispatch<MessageActionTypes>) {
    return {
        onChangeMessage: (txt: string) => {
            dispatch(updateMesageAC(txt));
        },
        onSendMessage: () => {
            dispatch(sendMessageAC());
        }
    }
}
function mapStateToProps(state: RootState) {
    return {
        state: state.dialogsPage
    }
}

export default DialogsContainer;
