import React from 'react';
import styles from './Day003.module.css';

const Day003 = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sol}></div>
        <div className={styles['piramide-lado-izq']}></div>
        <div className={styles['piramide-lado-der']}></div>
        <div className={styles.cielo}></div>
        <div className={styles.arena}>
          <div className={styles.sombra}></div>
        </div>
      </div>
    </section>
  );
};

export default Day003;
