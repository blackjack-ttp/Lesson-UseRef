//* LIB
import { useEffect, useRef, useState } from 'react';

//* SCSS
import '@/styles/learn_2/style.scss';

const Increase = () => {
  const [Increase, setIncrease] = useState(0);
  const prevIncrease = useRef(0);
  const HandleClickIncrease = () => {
    setIncrease((e) => e + 1);
  };
  useEffect(() => {
    prevIncrease.current = Increase;
  }, [Increase]);
  return (
    <>
      <div className="increase-wrap">
        <div className="increase-wrap__content">
          <h3>Present value: {Increase}</h3>
          <h3>Old value: {prevIncrease.current}</h3>
        </div>
        <div className="increase-wrap__btn">
          <button onClick={HandleClickIncrease}>Prev Increase</button>
        </div>
      </div>
    </>
  );
};

export default Increase;
