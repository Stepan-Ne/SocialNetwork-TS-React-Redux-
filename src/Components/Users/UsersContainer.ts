import {connect} from "react-redux";
import Users from "./Users";
import {RootState} from "../../Redux/redux-store";
import {Dispatch} from "react";
import {
    changePageAC,
    followedAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowedAC,
    UserActionsType,
    UserType
} from "../../Redux/usersReducer";

const mapStateToProps = (state: RootState) => {
    console.log(state.usersPage)
    return {
        users: state.usersPage
    }
};
const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>) => {
    return {
        follow: (userId: string) => dispatch(followedAC(userId)),
        unfollow: (userId: string) => {
            dispatch(unfollowedAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        changePage: (page: number) => {
            dispatch(changePageAC(page))
        },
        setTotalUsersCount: (count: number) => {
            dispatch(setTotalUsersCountAC(count))
        }
    }
};


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;