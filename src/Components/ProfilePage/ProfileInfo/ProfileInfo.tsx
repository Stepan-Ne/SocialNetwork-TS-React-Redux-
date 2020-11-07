import { profile } from 'console'
import React from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import { ProfileType } from './../ProfileContainerConnect'

type PropsType = {
  profile: ProfileType | null
}

const ProfileInfo = (props: PropsType) => {
  return (
    <div>
      {props.profile ? (
        <div>
          <img src={props.profile.photos.large} alt="logo" />
          <p>Full name: {props.profile.fullName}</p>
          <p>About me: {props.profile.aboutMe}</p>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  )
}

export default ProfileInfo
