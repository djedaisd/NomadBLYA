import d from './../../dialog.module.css';
import { NavLink } from 'react-router-dom';
const DialogItem = (props) => {
  let path = '/dialog/' + props.id;
  return (
    <div className={d.dialog + ' ' + d.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};
export default DialogItem;
