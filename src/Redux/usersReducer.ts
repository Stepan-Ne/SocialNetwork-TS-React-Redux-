
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
type UsersDataType = {
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
        default:
            return state;
    }
}


//ACTION CREATORS
const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
type FollowedAction = {
    type: typeof FOLLOWED
    id: string
}
type UnfollowedAction = {
    type: typeof UNFOLLOWED
    id: string
}
type UserActionsType = UnfollowedAction | FollowedAction;
const followedAC = (userId: string): UserActionsType => ({type: FOLLOWED, id: userId});
const unfollowedAC = (userId: string): UserActionsType => ({type: UNFOLLOWED, id: userId});

export default usersReducer;