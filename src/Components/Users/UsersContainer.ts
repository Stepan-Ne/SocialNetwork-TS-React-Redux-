import {connect} from "react-redux";
import {Users} from "./Users";
import {RootState} from "../../Redux/redux-store";
import {Dispatch} from "react";
import {followedAC, setUsers, unfollowedAC, UserActionsType} from "../../Redux/usersReducer";

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersPage
    }
};
const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>) => {
    return {
        follow: (userId: string) => {followedAC(userId)},
        unfollow: (userId: string) => {unfollowedAC(userId)},
        setUsers: (users: any) => {setUsers(users)}
    }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;