let initialState: UsersDataType = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
};

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
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const usersReducer = (state = initialState, action: UserActionsType):
    UsersDataType => {

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
            return {...state, users: [...action.users]};
        case CHANGE_PAGE:
            return {...state, currentPage: action.page};
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};
        case FETCHING:
            return {
                ...state,
                isFetching: action.loading
            }
        default:
            return state;
    }
};


//ACTION CREATORS
const FOLLOWED = "FOLLOWED";
const UNFOLLOWED = "UNFOLLOWED";
const SET_USERS = "SET_USERS";
const CHANGE_PAGE = "CHANGE_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const FETCHING = 'FETCHING';

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
type changePageAction = {
    type: typeof CHANGE_PAGE
    page: number
}
type SetTotalUsersCount = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
type Fetching = {
    type: typeof FETCHING
    loading: boolean
}
export type UserActionsType =
    UnfollowedAction
    | FollowedAction
    | SetUsersAction
    | changePageAction
    | SetTotalUsersCount
    | Fetching;

export const setUsers = (users: UserType[]): { type: typeof SET_USERS, users: UserType[] } => ({
    type: SET_USERS,
    users
} as const);
export const follow = (userId: string): UserActionsType => ({type: FOLLOWED, id: userId} as const);
export const unfollow = (userId: string): UserActionsType => ({type: UNFOLLOWED, id: userId} as const);
export const changePage = (page: number): changePageAction => ({type: CHANGE_PAGE, page});
export const setTotalUsersCount = (count: number): SetTotalUsersCount => ({type: SET_TOTAL_USERS_COUNT, count});
export const isFetching = (loading: boolean): Fetching => ({type: FETCHING, loading});

export default usersReducer;