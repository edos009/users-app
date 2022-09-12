import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataResponseError,
  dataResponseIsFetchingFalse,
  dataResponseIsFetchingTrue,
  dataResponseSuccess,
  sendInvitations,
  setSearchValue,
} from "../../store/usersReducer";
import { loadUser } from "../api";
import Skeleton from "../Skeleton";
import User from "../User";

import styles from "./Users.module.scss";

const Users = () => {
  const { users, isFetching, searchValue, invitedUsers } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  const load = () => {
    dispatch(dataResponseIsFetchingTrue());
    loadUser()
      .then((users) => dispatch(dataResponseSuccess({ users: users.data })))
      .catch((error) => dispatch(dataResponseError({ error })))
      .finally(() => dispatch(dataResponseIsFetchingFalse()));
  };

  useEffect(() => {
    load();
    // eslint-disable-next-line
  }, []);

  console.log({ users });

  return (
    <>
      <div className={styles.search}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
        <input
          type="text"
          value={searchValue}
          onChange={({ target: { value } }) =>
            dispatch(setSearchValue({ value }))
          }
          placeholder="Найти пользователя..."
        />
      </div>
      {isFetching ? (
        <div className={styles.skeletonList}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className={styles.usersList}>
          {users
            .filter(({ first_name, last_name, email }) => {
              const fullName = `${first_name} ${last_name}`;
              return (
                fullName.toLowerCase().includes(searchValue.toLowerCase()) ||
                email.toLowerCase().includes(searchValue.toLowerCase())
              );
            })
            .map((user) => (
              <User key={user.id} user={user} />
            ))}
        </ul>
      )}
      <button
        className={styles.sendInviteBtn}
        onClick={() => dispatch(sendInvitations())}
        disabled={!(invitedUsers.length > 0)}
      >
        Отправить приглашение
      </button>
    </>
  );
};

export default Users;
