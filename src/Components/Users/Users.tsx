import React from "react";
import {UsersDataType} from "../../Redux/usersReducer";
import s from "./Users.module.css";
import userImage from "./../../img/user.png"
import axios from "axios"

type UsersPropsType = {
    users: UsersDataType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: any) => void
}
type UserType = {
    "name": string
    "id": number
    "uniqueUrlName": null,
    "photos": {
        "small": null,
        "large": null
    },
    "status": null,
    "followed": boolean
}
type ResponseUsersType = {
    "items": Array<UserType>
}

class Users extends React.Component<UsersPropsType, ResponseUsersType> {

    componentDidMount() {
        if (this.props.users.users.length === 0) {
            axios.get<ResponseUsersType>("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
        return (
            <div>
                {this.props.users.users.map(u => {
                    return <div className={s.userBlock} key={u.id}>
                        <div className={s.userInfo}>
                            <p>{u.name}</p>
                            <p><span>{"u.location.country"}</span>,
                                <span>{"u.location.city"}</span></p>

                            {u.followed
                                ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                : <button onClick={() => this.props.follow(u.id)}>Follow</button>}

                        </div>
                        <div className={s.userLogo}>
                            <img src={userImage} alt="logo"/>
                        </div>
                    </div>
                })}
            </div>
        )
    }
}

export default Users;