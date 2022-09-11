import React from 'react';

import styles from "./Success.module.scss";

const Success = ({count}) => {
  return (
    <div className={styles.successBlock}>
      <img src="/assets/success.svg" alt="Success" />
      <h3>Успешно!</h3>
      <p>Всем {count} пользователям отправлено приглашение.</p>
      <button className={styles.sendInviteBtn}>Назад</button>
    </div>
  );
};

export default Success;
