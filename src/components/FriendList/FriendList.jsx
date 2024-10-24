import clsx from 'clsx';
import s from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={clsx(s.list)}>
      {friends.map(friend => {
        return (
          <li className={clsx(s.listItem)} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
