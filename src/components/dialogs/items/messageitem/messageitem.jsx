import d from './../../dialog.module.css';

const MessageItem = (props) => {
  return <div className={d.message}>{props.message}</div>;
};

export default MessageItem;
