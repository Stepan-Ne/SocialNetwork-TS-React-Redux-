import { connect } from 'react-redux';
import { RootState } from '../../Redux/redux-store';
import React, { Dispatch } from 'react';
import {
  changePage,
  follow,
  isFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
  UserActionsType,
  UsersDataType,
  UserType,
} from '../../Redux/usersReducer';
import axios from 'axios';
import Users from './Users';
import { withRouter, RouteComponentProps } from 'react-router-dom';

type UsersPropsType = {
  users: UsersDataType;
  follow: (userId: string) => void;
  unfollow: (userId: string) => void;
  setUsers: (users: UserType[]) => void;
  changePage: (page: number) => void;
  setTotalUsersCount: (totalUsersCount: number) => void;
  isFetching: (loading: boolean) => void;
};

type ResponseUsersType = {
  items: Array<UserType>;
  totalCount: string;
  error: null;
};

//Container first level
class UsersContainer extends React.Component<UsersPropsType & RouteComponentProps<any>,ResponseUsersType> {
  componentDidMount() {
    this.props.isFetching(true);
    let pS = this.props.users.pageSize;
    let cP = this.props.users.currentPage;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${pS}&page=${cP}`
      )
      .then((response) => {
        this.props.isFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }

  setPage = (p: number) => {
    this.props.isFetching(true);
    this.props.changePage(p);
    let cP = this.props.users.currentPage;
    axios
      .get<ResponseUsersType>(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.users.pageSize}&page=${p}`
      )
      .then((response) => {
        this.props.isFetching(false);
        //  console.log(response.data.items) //UserType[]
        this.props.setUsers(response.data.items);
      });
  };

  render() {
    return (
      <Users
        usersState={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        setPage={this.setPage}
      />
    );
  }
}

//Container second level
const mapStateToProps = (state: RootState) => {
  return {
    users: state.usersPage,
  };
};
// const mapDispatchToProps = (dispatch: Dispatch<UserActionsType>) => {
//     return {
//         follow: (userId: string) => dispatch(follow(userId)),
//         unfollow: (userId: string) => {
//             dispatch(unfollow(userId))
//         },
//         setUsers: (users: UserType[]) => {
//             dispatch(setUsers(users))
//         },
//         changePage: (page: number) => {
//             dispatch(changePage(page))
//         },
//         setTotalUsersCount: (count: number) => {
//             dispatch(setTotalUsersCount(count))
//         },
//         isFetching: (loading: boolean) => {
//             dispatch(isFetching(loading))
//         }
//     }
// };
const objForMapDispatch = {
  changePage,
  follow,
  isFetching,
  setTotalUsersCount,
  setUsers,
  unfollow,
};

//withRouter here added for future
const WithRouterUsersContainer = withRouter(UsersContainer)
const UsersContainerConnect = connect(mapStateToProps, objForMapDispatch)(WithRouterUsersContainer);
export default UsersContainerConnect;
