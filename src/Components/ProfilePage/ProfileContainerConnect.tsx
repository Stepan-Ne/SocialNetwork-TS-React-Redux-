import React from "react";
 import {connect} from "react-redux";
import axios from "axios"
import Preloader from "../Common/Preloader/Preloader";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {setProfile} from "./../../Redux/profileReducer"
import { RootState } from "../../Redux/redux-store";
import MyPosts from "./MyPosts/MyPosts";


export type ProfileType = {
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
}
type ProfileContainerType = {
    setProfile: (data: ProfileType) => any
    profile: ProfileType | null
}

class ProfileContainer extends React.Component<ProfileContainerType, {}> {

    componentDidMount(): void {
        axios.get<ProfileType>('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => {
                this.props.setProfile(response.data)
            })
    }

    render() {
        const proooofile = this.state
        
        return (
            <div>
               {/* {profile
               ? <img src={profile.photos.large} alt="logo"/>
            : <Preloader/>} */}
                <ProfileInfo {...this.props}/>
                <MyPosts/>
            </div>
        )
    }
};

const mapStateToProps = (state: RootState) => {
    return {
        profile: state.profilePage.profile
    }
}



const ProfileContainerConnect = connect(mapStateToProps, {setProfile})(ProfileContainer);

export default ProfileContainerConnect;

