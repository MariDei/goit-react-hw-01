import FriendListItem from "./FriendListItem";
// import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />;
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
