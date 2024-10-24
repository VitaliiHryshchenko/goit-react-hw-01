import clsx from 'clsx';
import s from './FriendListItem.module.css';

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <div>
      <img className={clsx(s.img)} src={avatar} alt={name} width="48" />
      <p className={clsx(s.name)}>{name}</p>
      <p className={clsx(s.text, isOnline ? s.online : s.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
