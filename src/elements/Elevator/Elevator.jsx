import React from 'react';
import styles from './Elevator.module.css';

const Elevator = ({ floor, floorComponent, doorClosed }) => {
  return (
    <div className={styles['elevator-container']}>
      <h2>{floor}</h2>

      <div className={styles.elevator}>
        <span className={styles.wall}></span>
        <span
          className={doorClosed ? styles['close-left'] : styles['open-left']}
        ></span>
        <span
          className={doorClosed ? styles['close-right'] : styles['open-right']}
        ></span>
        {floorComponent}
      </div>
    </div>
  );
};

export default Elevator;
