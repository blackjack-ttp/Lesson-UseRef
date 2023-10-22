// * LIB
import { useRef, useState } from 'react';
// * SCSS
import '@/styles/learn_4/style.scss';

const SizeButton = () => {
  const [name, setName] = useState('');
  const sizeInput = useRef();
  const handleClickSize = () => {
    sizeInput.current.style.width = '400px';
  };
  return (
    <>
      <div className="SizeButton-wrap">
        <input
          type="text"
          style={{ width: '200px' }}
          ref={sizeInput}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleClickSize}>Click size Input</button>
      </div>
    </>
  );
};

export default SizeButton;
