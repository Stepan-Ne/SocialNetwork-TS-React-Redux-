import React from "react";
import {UsersDataType} from "../../Redux/usersReducer";

type UsersPropsType = {
    users: UsersDataType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: any) => void
}

export function Users(props: UsersPropsType) {
    return (
        <div>
            {props.users.users.map(u => {
                return <div key={u.id}>
                    <span>{u.name}</span>
                    <span>{u.location.country}</span>
                    <span>{u.location.city}</span>
                    {u.followed ? <button>Unfollowed</button> : <button>Followed</button>}
                </div>
            })}
        </div>
    )
}