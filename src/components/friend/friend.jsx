import css from './friend.module.css';
import propTypes from 'prop-types';
import clsx from 'clsx';

export const FriendList = ({ friends, variant }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={css.friendListItem}>
          {friend.isOnline ? (
            <span className={clsx(css.status, css.true)}></span>
          ) : (
            <span className={clsx(css.status, css.false)}></span>
          )}
          <img
            className={css.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friend: propTypes.arrayOf(
    propTypes.shape({
      status: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
    })
  ),
};
