import css from './Profile.module.css';

const Profile = ({
  name,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div>
        <img
          className={css.avatar}
          src={avatar}
          alt={name}
          width={100}
          height={100}
        />
        <p className={css.title}>{name}</p>
        <p className={css.description}>@{tag}</p>
        <p className={css.description}>{location}</p>
      </div>

      <ul className={css.wrapper}>
        <li className={css.item}>
          <span className={css.stats}>Followers</span>
          <span className={css.quantity}> {followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.stats}>Views</span>
          <span className={css.quantity}> {views}</span>
        </li>
        <li className={css.item}>
          <span className={css.stats}>Likes</span>
          <span className={css.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
