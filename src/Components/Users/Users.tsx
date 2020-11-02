import React from "react";
import {UsersDataType, UserType} from "../../Redux/usersReducer";
import s from "./Users.module.css";
import userImage from "./../../img/user.png"
import axios from "axios"

type UsersPropsType = {
    users: UsersDataType
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (users: UserType[]) => void
    changePage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}

type ResponseUsersType = {
    "items": Array<UserType>
    "totalCount": string,
    "error": null
}

class Users extends React.Component<UsersPropsType, ResponseUsersType> {

    componentDidMount() {
        let pS = this.props.users.pageSize
        let cP = this.props.users.currentPage
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pS}&page=${cP}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)

            })
    }

    setPage = (p: number) => {
        this.props.changePage(p)
        let cP = this.props.users.currentPage
        axios.get<ResponseUsersType>(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.pageSize}&page=${p}`)
            .then(response => {
                //  console.log(response.data.items) //UserType[]
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pageCount = Math.ceil(this.props.users.totalUsersCount / this.props.users.pageSize)
        let pages = []
        for (let i = 1; i < pageCount / 100; i++) {
            pages.push(i)
        }
        return (
            <div>
                <div>{pages.map(p => <button key={p} onClick={() => this.setPage(p)}
                                             className={this.props.users.currentPage === p ? s.selectedPage : ''}>{p}</button>)}
                </div>
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