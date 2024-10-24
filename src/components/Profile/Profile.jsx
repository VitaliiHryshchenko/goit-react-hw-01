import clsx from 'clsx';
import s from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={clsx(s.container)}>
      <div className={clsx(s.topPart)}>
        <img className={clsx(s.img)} src={image} alt={name} width={180} />
        <p className={clsx(s.name)}>{name}</p>
        <p className={clsx(s.text)}>@{tag}</p>
        <p className={clsx(s.text)}>{location}</p>
      </div>

      <ul className={clsx(s.list)}>
        <li className={clsx(s.listItem)}>
          <span className={clsx(s.listText)}>Followers</span>
          <span className={clsx(s.listNumber)}>{followers}</span>
        </li>
        <li className={clsx(s.listItem)}>
          <span className={clsx(s.listText)}>Views</span>
          <span className={clsx(s.listNumber)}>{views}</span>
        </li>
        <li className={clsx(s.listItem)}>
          <span className={clsx(s.listText)}>Likes</span>
          <span className={clsx(s.listNumber)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
