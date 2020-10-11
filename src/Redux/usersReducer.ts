
let initialState: UsersDataType = {
    users: [
        {id: "1", followed: true, name: "Michel", location: {
            country: "Russia",
            city: "Moscow"
        }},
        {id: "2", followed: false, name: "Olga", location: {
            country: "Russia",
            city: "Moscow"
        }},
        {id: "3", followed: true, name: "Luba", location: {
            country: "Russia",
            city: "Moscow"
        }},
        {id: "4", followed: false, name: "Stepan", location: {
            country: "Russia",
            city: "Moscow"
        }},
    ]
}

type LocationType = {
    country: string
    city: string
}
type UserType = {
    id: string
    followed: boolean
    name: string
    location: LocationType
}
export type UsersDataType = {
    users: UserType[]
}

const usersReducer = (state = initialState, action: UserActionsType): UsersDataType => {

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
}


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
export const setUsers = (users: UserType[]): SetUsersAction => ({type: SET_USERS, users})
export const followedAC = (userId: string): UserActionsType => ({type: FOLLOWED, id: userId});
export const unfollowedAC = (userId: string): UserActionsType => ({type: UNFOLLOWED, id: userId});

export default usersReducer;