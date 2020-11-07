import React from 'react'
import classes from './Post.module.css'

type PostPropsType = {
  message: string
  likesCount: string
  id: string
}

export function Post(props: PostPropsType) {

  function onClickHandler() {

  }
  return (
    <div className={classes.item}>
      <p>{props.message}</p>
      <div>
        <button onClick={() => alert('Hi')}>Like {props.likesCount}</button>
      </div>
    </div>
  )
}
export default Post
