import { useEffect, useState } from 'react';
import './App.css';
import { floors } from './Data/floor';
import Keypad from './elements/Keypad/Keypad';
import Elevator from './elements/Elevator/Elevator';

function App() {
  const [floor, setFloor] = useState(1);
  const [floorComponent, setFloorComponent] = useState(floors[0]);
  const [targetFloor, setTargetFloor] = useState(1);
  const [doorClosed, setDoorClosed] = useState(false);

  useEffect(() => {
    let intervalId;

    if (floor !== targetFloor) {
      if (!doorClosed) {
        setDoorClosed(true);
        setTimeout(() => {
          intervalId = setInterval(() => {
            if (floor < targetFloor) {
              setFloor((prevFloor) => {
                const newFloor = prevFloor + 1;
                if (newFloor === targetFloor) {
                  clearInterval(intervalId);
                  setDoorClosed(false);
                }
                return newFloor;
              });
            } else if (floor > targetFloor) {
              setFloor((prevFloor) => {
                const newFloor = prevFloor - 1;
                if (newFloor === targetFloor) {
                  clearInterval(intervalId);
                  setDoorClosed(false);
                }
                return newFloor;
              });
            } else {
              clearInterval(intervalId);
            }
          }, 100);

          setFloorComponent(floors[targetFloor - 1]);
        }, 1000);
      }
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [floor, targetFloor, doorClosed]);

  return (
    <main>
      <div className='general-container'>
        <Keypad targetFloor={targetFloor} setTargetFloor={setTargetFloor} />
        <Elevator
          floor={floor}
          floorComponent={floorComponent}
          doorClosed={doorClosed}
        />
      </div>
    </main>
  );
}

export default App;
