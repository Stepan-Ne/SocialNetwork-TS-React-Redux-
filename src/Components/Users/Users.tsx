import React from "react";
import {UsersDataType} from "../../Redux/usersReducer";
import s from "./Users.module.css";
import userImage from "./../../img/user.png"

type UsersPropsType = {
    users: UsersDataType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: any) => void
}

export function Users(props: UsersPropsType) {

    function setUsersClick() {
        if (props.users.users.length === 1) {
            props.setUsers([
                {
                    id: "2", followed: false, name: "Olga", location: {
                        country: "Russia",
                        city: "Moscow"
                    }
                },
                {
                    id: "3", followed: true, name: "Luba", location: {
                        country: "Russia",
                        city: "Moscow"
                    }
                },
                {
                    id: "4", followed: false, name: "Stepan", location: {
                        country: "Russia",
                        city: "Moscow"
                    }
                },
            ])
        }
    }


    function unfollow(userId: string) {
        props.unfollow(userId);
    }

    return (

        <div>
            <button onClick={setUsersClick}>Set users</button>
            {props.users.users.map(u => {
                return <div className={s.userBlock} key={u.id}>
                    <div className={s.userInfo}>
                        <p>{u.name}</p>
                        <p><span>{u.location.country}</span>, <span>{u.location.city}</span></p>
                        {u.followed
                            ? <button onClick={() => unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                    <div className={s.userLogo}>
                        <img src={userImage} alt="logo"/>
                    </div>
                </div>
            })}
        </div>
    )
}