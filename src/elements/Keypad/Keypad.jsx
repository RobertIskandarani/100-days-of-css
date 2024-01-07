import React, { useEffect, useState } from 'react';
import styles from './Keypad.module.css';

const Keypad = ({ setTargetFloor }) => {
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    initButtons(100);
  }, []);

  const initButtons = (total) => {
    const buttonList = [];
    for (let i = 0; i < total; i++) {
      buttonList.push(
        <div className={styles['buton-container']} key={i}>
          <button
            type='button'
            onClick={() => handleClick(i)}
            className={styles.buton}
          >
            {i + 1}
          </button>
        </div>
      );
    }
    setButtons(buttonList);
  };

  const handleClick = (i) => {
    setTargetFloor(i + 1);
  };

  return (
    <div className={styles.botonera}>
      <div className={styles.tornillo}></div>
      <div className={styles.tornillo}></div>
      <div className={styles.tornillo}></div>
      <div className={styles.tornillo}></div>
      {buttons}
    </div>
  );
};

export default Keypad;
