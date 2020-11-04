import React from "react";
import ProfileInfo from "../ProfileInfo/ProfileInfo";
import MyPostsContainer from "../MyPostsContainer";
import {connect} from "react-redux";
import axios from "axios"
import {setProfileInfo} from "../../../Redux/profileReducer";

type ProfilePropsType = {
    profile: ResponseProfileType
    setProfileInfo: (profileData: ResponseProfileType) => void
}
export type ResponseProfileType = {
    "aboutMe": string
    "contacts": {
        "facebook": string
        "website": null,
        "vk": string
        "twitter": string
        "instagram": string
        "youtube": null,
        "github": string
        "mainLink": null
    },
    "lookingForAJob": boolean
    "lookingForAJobDescription": string
    "fullName": string
    "userId": number
    "photos": {
        "small": string
        "large": string
    }
} | {}

class ProfileContainer extends React.Component<ProfilePropsType, ResponseProfileType> {

    componentDidMount(): void {
        axios.get<ResponseProfileType>('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                console.log(response.data)
                this.props.setProfileInfo(response.data)
            })
    }

    render() {
        return (
            <div>
               <ProfileInfo {...this.props}/>
               <MyPostsContainer/>
            </div>
        )
    }
}

const mapStateToProps = (state: ResponseProfileType) => {
    return {
        profile: state
    }
};

const ProfileContainerConnect = connect(mapStateToProps, {setProfileInfo})(ProfileContainer);

export default ProfileContainerConnect;

