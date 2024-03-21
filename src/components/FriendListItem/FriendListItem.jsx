import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css["friends-list-item"]}>
      <img
        className={css["friends-list-item-img"]}
        src={avatar}
        alt="Avatar"
        width="96"
      />
      <p className={css["friends-list-item-name"]}>{name}</p>
      <p
        className={clsx(
          css["friends-list-item-status"],
          isOnline && css["is-online"],
          !isOnline && css["is-offline"]
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
