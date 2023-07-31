import p from './posts.module.css'
import Post from './post/post'
import React from 'react'

const Posts = (props) => {
  let postsNewArr = props.posts.map((p) => (
    <Post id={p.id} message={p.message} likeCount={p.likeCount} />
  ))

  let addPost = () => {
    props.dispatch({ type: 'ADD-POST' })
  }
  let newPostElement = React.createRef()

  let onChangePost = () => {
    let text = newPostElement.current.value
    props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
  }
  return (
    <div className={p.post_wrap}>
      <div>
        <textarea
          onChange={onChangePost}
          ref={newPostElement}
          value={props.newPostText}
        />
      </div>
      <div>
        <button onClick={addPost}>add new post</button>
      </div>
      <div>{postsNewArr}</div>
    </div>
  )
}

export default Posts
