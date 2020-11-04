import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPostsContainer";
import {connect} from "react-redux";
import axios from "axios"

class ProfileContainer extends React.Component<any, any> {

    componentDidMount(): void {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                console.log(response.data)
            })
    }

    render() {
        return (
            <div>
               <ProfileInfo/>
               <MyPostsContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile
    }
};

const ProfileContainerConnect = connect(mapStateToProps, {})(ProfileContainer)

export default ProfileContainerConnect;

