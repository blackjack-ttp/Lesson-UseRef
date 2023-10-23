// * LIB
import { useEffect, useRef, useState } from 'react';
// * SCSS
import '@/styles/learn_6/style.scss';

const paragraphStyle = {
  WebkitLineClamp: 1, // Cho phép số dòng xuất hiện trên UI
  webkitBoxOrient: 'vertical',
  overflow: 'hidden',
  display: '-webkit-box',
};

const Learn_6 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      console.info(ref.current.scrollHeight, ref.current.clientHeight);
      setShowReadMore(ref.current.scrollHeight !== ref.current.clientHeight);
    }
  }, []);
  return (
    <>
      <div className="learn6-wrap">
        <div className="learn6-wrap__content">
          <p style={isOpen ? null : paragraphStyle} ref={ref}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ullam aperiam
            suscipit nostrum deserunt possimus unde quam totam similique expedita fugiat nobis
            pariatur rerum, cumque quae accusantium in eligendi! Doloribus. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Distinctio cum minus dolorum, quaerat harum omnis
            rerum eveniet explicabo porro quo unde quod eaque eligendi doloribus, pariatur odit rem
            ut nulla.
          </p>
        </div>
      </div>
      {showReadMore && (
        <div className="learn6-wrap__btn">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? 'Read less...' : 'read more...'}
          </button>
        </div>
      )}
    </>
  );
};

export default Learn_6;
