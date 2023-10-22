// * LIB
import { useRef, useState } from 'react';

// * SCSS
import '@/styles/learn_5/style.scss';

function ExampleComponent() {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const handleButtonClick = () => {
    alert(`Giá trị nhập: ${inputRef.current.value}`);
  };
  const handleInputChange = () => {
    setInputValue(inputRef.current.value);
  };
  return (
    <>
      <div className="ExampleComponent-wrap">
        <input type="text" ref={inputRef} onChange={handleInputChange} value={inputValue} />
        <button onClick={handleButtonClick}>Xem giá trị</button>
      </div>
    </>
  );
}

export default ExampleComponent;
