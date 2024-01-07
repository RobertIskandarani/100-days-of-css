import React from 'react';
import styles from './Day001.module.css';

const Day001 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.cien}>
          <div className={styles.uno}></div>
          <div className={styles.subuno}></div>
          <div className={`${styles.cero} ${styles.first}`}></div>
          <div className={styles.cero}></div>
        </div>
        <div className={styles.days}>days</div>
        <div className={styles.subtitles}>css challenge</div>
      </div>
    </section>
  );
};

export default Day001;
