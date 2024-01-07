import React, { useState } from 'react';
import styles from './Day002.module.css';

const Day002 = () => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <section className={styles.section}>
      <div
        className={styles.container}
        onClick={() => setIsSelected(!isSelected)}
      >
        <div
          className={`${styles.line} ${
            isSelected ? styles['line1-selected'] : styles.line1
          }`}
        ></div>
        <div
          className={`${styles.line} ${
            isSelected ? styles['line2-selected'] : styles.line2
          }`}
        ></div>
        <div
          className={`${styles.line} ${
            isSelected ? styles['line3-selected'] : styles.line3
          }`}
        ></div>
      </div>
    </section>
  );
};

export default Day002;
