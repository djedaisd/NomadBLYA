import c from './profile_content_props.module.css';

const ProfileContent = (props) => {
  return (
    <div className={c.userinfo}>
      <img
        src="https://media.discordapp.net/attachments/944288035535724564/1119541816912527430/tori-1976609.jpg?width=1023&height=683"
        alt=""
      />
      <div>ava+pfp</div>
    </div>
  );
};

export default ProfileContent;
