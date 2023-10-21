//* LIB
import { useEffect, useRef, useState } from 'react';

//* SCSS
import '@/styles/learn_1/style.scss';

const AutoCount = () => {
  const [count, setCount] = useState(0);
  const countAuto = useRef(0);

  const handleStartAuto = () => {
    if (countAuto.current) {
      return;
    }
    countAuto.current = setInterval(() => setCount((count) => count + 1), 500);
  };
  const handleStopAuto = () => {
    clearInterval(countAuto.current);
    countAuto.current = 0;
  };
  const handleResetAuto = () => {
    clearInterval(countAuto.current);
    countAuto.current = 0;
    setCount(0);
  };
  useEffect(() => {
    return () => clearInterval(countAuto.current);
  }, []);
  return (
    <>
      <div className="autoCount-wrap">
        <div className="autoCount-wrap__content">{count}</div>
        <div className="autoCount-wrap__menu-btn">
          <button onClick={handleStartAuto}>Start</button>
          <button onClick={handleStopAuto}>Stop</button>
          <button onClick={handleResetAuto}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default AutoCount;
