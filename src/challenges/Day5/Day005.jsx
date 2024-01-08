import React from 'react';
import styles from './Day005.module.css';

const Day005 = () => {
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <section className={styles.section}>
      <div className={styles.calendar}>
        <div className={styles.header}>
          <div className={styles.date}>
            <h3>WEEKLY REPORT</h3>
            <h4>01.Feb - 07.Feb</h4>
          </div>
          <div className={styles.revenue}>
            <h4>Revenue</h4>
            <h3>$3621.79</h3>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.title}>
            <p>
              <span className={styles.views}></span> Views
            </p>
            <p>
              <span className={styles.purchases}></span> Purchases
            </p>
          </div>
          <div className={styles.graph}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <div className={styles['graph-content']}>
              <span className={styles.dot1}></span>
              <span className={styles.dot1}></span>
              <span className={styles.dot1}></span>
              <span className={styles.dot1}></span>
              <span className={styles.dot1}></span>
              <span className={styles.dot1}></span>
              <span className={styles.dot1}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot2}></span>
              <span className={styles.dot2}></span>
              <svg width='260' height='80'>
                <polyline
                  className={styles['polyline-views']}
                  points='9,46 50,12 90,23 130,11 171,38 211,48 251,19'
                />
                <polyline
                  className={styles['polyline-purchases']}
                  points='9,61 50,50 90,65 130,55 171,61 211,74 251,64'
                />
              </svg>
            </div>
          </div>
          <div className={styles.labels}>
            {days.map((day) => {
              return <p>{day}</p>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Day005;
