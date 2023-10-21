// * LIB
import { useEffect, useRef, useState } from 'react';
// * SCSS
import '@/styles/learn_3/style.scss';

const InputFocus = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });
  const inputEl = useRef();
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = () => {
    setForm({
      username: '',
      password: '',
    });
    inputEl.current.focus();
    inputEl.current.value = 'I am BlackJack TTP';
  };
  useEffect(() => {
    inputEl.current.focus();
  }, []);
  return (
    <>
      <div className="inputFocus-wrap">
        <div className="inputFocus-wrap__input">
          <div className="inputFocus-wrap__input__username">
            <p>UserName</p>
            <input
              type="text"
              ref={inputEl}
              autoComplete="off"
              value={form.username}
              name="username"
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>
          <div className="inputFocus-wrap__input__password">
            <p>Password</p>
            <input
              type="password"
              autoComplete="off"
              value={form.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter password"
            />
          </div>
        </div>
        <div className="inputFocus-wrap__btn">
          <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default InputFocus;
