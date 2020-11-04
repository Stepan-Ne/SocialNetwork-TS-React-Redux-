import React from "react";

const ProfileInfo = (props: any) => {
    return (
        <div>
            <img src={props.profile.photos.large} alt="userAva"/>
        </div>
    )
};

export default ProfileInfo;