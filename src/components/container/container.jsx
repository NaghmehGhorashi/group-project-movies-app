import style from "./container.module.css";

// Filename should be Container.jsx

// create Wrapper to put all code in side
function Wrapper({ children }) {
  return <div className={style.container}>{children}</div>;
}

export default Wrapper;
