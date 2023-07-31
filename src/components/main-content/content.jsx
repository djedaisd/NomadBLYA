import c from './content.module.css'
import Posts from './posts/posts'
import ProfileContent from './profile_content/profile_content_props'

const MainContent = (props) => {
  return (
    <div className={c.content_wrapper}>
      <ProfileContent />

      <Posts
        posts={props.appstate.posts}
        dispatch={props.dispatch}
        newPostText={props.appstate.newPostText}
      />
    </div>
  )
}

export default MainContent
