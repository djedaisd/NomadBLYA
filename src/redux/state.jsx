let store = {
  _state: {
    postsState: {
      posts: [
        { id: 1, message: 'hello', likeCount: 12 },
        { id: 2, message: 'this is me', likeCount: 15 },
        { id: 3, message: 'like your profile', likeCount: 123 },
        { id: 4, message: 'subscribe me', likeCount: 76 },
      ],
      newPostText: '',
    },
    dialogsState: {
      dialogsData: [
        { id: 1, name: 'Vladislav' },
        { id: 2, name: 'Arsen' },
        { id: 3, name: 'Azamat' },
        { id: 4, name: 'Artyom' },
        { id: 5, name: 'Ali' },
        { id: 6, name: 'Islom' },
        { id: 7, name: 'Kazybek ' },
      ],
      messagesData: [
        { id: 1, message: 'Hello' },
        { id: 2, message: 'How are u' },
        { id: 3, message: 'Yoo, its me' },
        { id: 4, message: 'BRBRBR' },
        { id: 5, message: 'Like your new posts' },
      ],
    },
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },

  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.postsState.newPostText,
      likeCount: 0,
    }
    this._state.postsState.posts.push(newPost)
    this._state.postsState.newPostText = ''
    this._callSubscriber(this._state)
  },
  _updateNewPostText(newText) {
    this._state.postsState.newPostText = newText
    this._callSubscriber(this._state)
  },
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._addPost()
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText)
    }
  },
}

export default store
