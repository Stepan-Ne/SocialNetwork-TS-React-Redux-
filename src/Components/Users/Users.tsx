import React from 'react';
import s from './Users.module.css';
import userImage from '../../img/user.png';
import { UsersDataType } from '../../Redux/usersReducer';
import Preloader from '../Common/Preloader/Preloader';
import { NavLink } from 'react-router-dom';

type UsersPropsType = {
  usersState: UsersDataType;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setPage: (p: number) => void;
};

const Users = (props: UsersPropsType) => {
  let pageCount = Math.ceil(
    props.usersState.totalUsersCount / props.usersState.pageSize
  );
  let pages = [];
  for (let i = 1; i < pageCount / 100; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => (
          <button
            key={p}
            onClick={() => props.setPage(p)}
            className={props.usersState.currentPage === p ? s.selectedPage : ''}
          >
            {p}
          </button>
        ))}
      </div>

      {props.usersState.isFetching ? <Preloader /> : null}

      {props.usersState.users.map((u) => {
        return (
          <div className={s.userBlock} key={u.id}>
            <div className={s.userInfo}>
              <p>{u.name}</p>
              <p>
                <span>{'u.location.country'}</span>,
                <span>{'u.location.city'}</span>
              </p>

              {u.followed ? (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              ) : (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              )}
            </div>
            <div className={s.userLogo}>
              <NavLink to={'/profile/' + u.id}>
                <img src={userImage} alt='logo' />
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
