import { profile } from 'console'
import React from 'react'
import Preloader from '../../Common/Preloader/Preloader'
import { ProfileType } from './../ProfileContainerConnect'

type PropsType = {
  profile: any | null
}

const ProfileInfo = (props: PropsType) => {
  return (
    <div>
      {props.profile.profile ? (
        <div>
          <img src={props.profile.profile.photos.large} alt="logo" />
          <p>Full name: {props.profile.profile.fullName}</p>
          <p>About me: {props.profile.profile.aboutMe}</p>
        </div>
      ) : (
        <Preloader />
      )}
    </div>
  )
}

export default ProfileInfo
