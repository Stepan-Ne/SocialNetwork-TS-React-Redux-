import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { setProfile, stateType } from './../../Redux/profileReducer';
import { RootState } from '../../Redux/redux-store';
import MyPostsContainerConnect from './MyPosts/MyPosts';
import { withRouter, RouteComponentProps } from 'react-router-dom';

export type ProfileType = {
  aboutMe: string;
  contacts: {
    facebook: string;
    website: null;
    vk: string;
    twitter: string;
    instagram: string;
    youtube: null;
    github: string;
    mainLink: null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
};
type ProfileContainerType = {
  setProfile: (data: ProfileType) => any;
  profile: stateType;
};

class ProfileContainer extends React.Component<
  ProfileContainerType & RouteComponentProps<any>,
  ProfileType
> {
  componentDidMount(): void {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = 2
      }
    axios
      .get<ProfileType>(
        'https://social-network.samuraijs.com/api/1.0/profile/' + userId
      )
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }

  render() {
    //const proooofile = this.state

    return (
      <div>
        {/* {profile
               ? <img src={profile.photos.large} alt="logo"/>
            : <Preloader/>} */}
        <ProfileInfo {...this.props} />
        <MyPostsContainerConnect />
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => {
  return {
    profile: state.profilePage,
  };
};

const WithRouterProfileContainer = withRouter(ProfileContainer)

const ProfileContainerConnect = connect(mapStateToProps, { setProfile })(
    WithRouterProfileContainer
);

export default ProfileContainerConnect;
