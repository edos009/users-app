import React from "react";
import { useSelector } from "react-redux";

import styles from "./Success.module.scss";

const Success = () => {
  const { invitedUsers } = useSelector((state) => state.users);

  return (
    <div className={styles.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {invitedUsers.length} пользователям отправлено приглашение.</p>
      <button
        className={styles.sendInviteBtn}
        onClick={() => window.location.reload()}
      >
        Назад
      </button>
    </div>
  );
};

export default Success;
