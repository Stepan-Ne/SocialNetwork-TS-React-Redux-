import React from "react";
import s from "./Users.module.css";
import userImage from "../../img/user.png";
import {UsersDataType} from "../../Redux/usersReducer";

type UsersPropsT = {
    users: UsersDataType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setPage: (p: number) => void
}

const Users = (props: UsersPropsT) => {

    let pageCount = Math.ceil(props.users.totalUsersCount / props.users.pageSize);
    let pages = [];
    for (let i = 1; i < pageCount / 100; i++) {
        pages.push(i)
    }

    return <div>

        <div>{pages.map(p => <button key={p}
                                     onClick={() => props.setPage(p)}
                                     className={props.users.currentPage === p ? s.selectedPage : ''}>
                        {p}</button>)}
        </div>
        {props.users.users.map(u => {
            return <div className={s.userBlock} key={u.id}>
                <div className={s.userInfo}>
                    <p>{u.name}</p>
                    <p><span>{"u.location.country"}</span>,
                        <span>{"u.location.city"}</span></p>

                    {u.followed
                        ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>Follow</button>}

                </div>
                <div className={s.userLogo}>
                    <img src={userImage} alt="logo"/>
                </div>
            </div>
        })}
    </div>
};

export default Users;