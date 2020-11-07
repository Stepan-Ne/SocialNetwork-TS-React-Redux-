import React from 'react'
import classes from './Post.module.css'

type PostPropsType = {
  message: string
  likesCount: string
  id: string
  like: (likesCount: string, idPost: string) => void
}

export function Post(props: PostPropsType) {

  function onClickHandler(likesCount: string, id: string) {
    let lC = +likesCount
    ++lC
    props.like(lC.toString(), id)
  }
  return (
    <div className={classes.item}>
      <p>{props.message}</p>
      <div>
        <button onClick={(e) => onClickHandler(props.likesCount, props.id)}>
          Like {props.likesCount}
        </button>
      </div>
    </div>
  )
}
export default Post
