import d from './dialog.module.css'
import DialogItem from './items/dialogitem/dialogitem'
import MessageItem from './items/messageitem/messageitem'
import React from 'react'
const Dialog = (props) => {
  let dialogNewArr = props.appstate.dialogsData.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ))

  let messagesNewArr = props.appstate.messagesData.map((m) => (
    <MessageItem message={m.message} />
  ))
  let messageInput = React.createRef()

  let messageInputFunction = () => {
    let msginpt = messageInput.current.value
    alert(msginpt)
  }
  return (
    <div className={d.dialog_wrapper}>
      <div className={d.dialogs_items}>{dialogNewArr}</div>
      <div className={d.messages_items}>{messagesNewArr}</div>

      <textarea ref={messageInput}></textarea>
      <div>
        <button onClick={messageInputFunction}>send answer</button>
      </div>
    </div>
  )
}

export default Dialog
