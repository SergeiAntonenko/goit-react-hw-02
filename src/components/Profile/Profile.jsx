import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css["profile-container"]}>
      <div className={css["profile-info"]}>
        <img className={css["profile-image"]} src={image} alt="User avatar" />
        <p className={css["profile-name"]}>{name}</p>
        <p className={css["profile-tag"]}>@{tag}</p>
        <p className={css["profile-tag"]}>{location}</p>
      </div>

      <ul className={css["profile-list"]}>
        <li className={css["profile-list-item"]}>
          <span>Followers</span>
          <span className={css["profile-list-item-span"]}>
            {stats.followers}
          </span>
        </li>
        <li className={css["profile-list-item"]}>
          <span>Views</span>
          <span className={css["profile-list-item-span"]}>{stats.views}</span>
        </li>
        <li className={css["profile-list-item"]}>
          <span>Likes</span>
          <span className={css["profile-list-item-span"]}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
