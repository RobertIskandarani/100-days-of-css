import React from 'react';
import styles from './Day006.module.css';
import day6 from '../../assets/day6.jpeg';

const Day006 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.perfil}>
          <div className={styles.primary}>
            <div className={styles.img}>
              <img src={day6} alt='perfil' width='70px' height='70px' />
              <span className={styles.border1}></span>
              <span className={styles.border2}></span>
            </div>
            <h3>Buzz Lightyear</h3>
            <h4>Virtual Actor</h4>
          </div>
          <div className={styles.buttons}>
            <button>Follow</button>
            <button>Message</button>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.data}>
            <h3 className={styles.count}>523</h3>
            <h4 className={styles.title}>Posts</h4>
          </div>
          <div className={styles.data}>
            <h3 className={styles.count}>1387</h3>
            <h4 className={styles.title}>Likes</h4>
          </div>
          <div className={styles.data}>
            <h3 className={styles.count}>146</h3>
            <h4 className={styles.title}>Followers</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Day006;
