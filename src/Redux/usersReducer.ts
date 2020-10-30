let initialState: UsersDataType = {
    users: []
}

// type LocationType = {
//     country: string
//     city: string
// }
export type UserType = {
    "name": string
    "id": string
    "uniqueUrlName": null,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean
}
export type UsersDataType = {
    users: UserType[]
}

const usersReducer = (state = initialState, action: UserActionsType):
    UsersDataType | [] => {
    //console.log(state)

    switch (action.type) {
        case FOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = true;
                    }
                    return u;
                })
            };
        case UNFOLLOWED:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        u.followed = false;
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]};
        default:
            return state;
    }
};


//ACTION CREATORS
const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";

type FollowedAction = {
    type: typeof FOLLOWED
    id: string
}
type UnfollowedAction = {
    type: typeof UNFOLLOWED
    id: string
}
type SetUsersAction = {
    type: typeof SET_USERS
    users: UserType[]
}
export type UserActionsType = UnfollowedAction | FollowedAction | SetUsersAction;

export const setUsers = (users: UserType[]): {type: typeof SET_USERS, users: UserType[]} => ({type: SET_USERS, users} as const)
export const followedAC = (userId: string): UserActionsType => ({type: FOLLOWED, id: userId} as const);
export const unfollowedAC = (userId: string): UserActionsType => {
    debugger
    return {type: UNFOLLOWED, id: userId} as const};

export default usersReducer;