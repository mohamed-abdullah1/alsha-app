import { AddJoke, ViewJoke } from "./components";
import { GrFormAdd } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./App.module.scss";
import { useState } from "react";
import { useTransition, animated } from "react-spring";
function App() {
  const [show, setShow] = useState(false);
  const transition = useTransition(show, {
    from: {
      x: 500,
      y: 200,
      "background-color": "rgba(0, 0, 0, 0)",
      background: "none",
    },
    enter: { x: 0, y: 0, "background-color": "rgba(0, 0, 0, 0.7)" },
    leave: {
      x: 500,
      y: -200,
      "background-color": "rgba(0, 0, 0, 0)",
    },
  });
  const clickHandler = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className={styles.app}>
      <ViewJoke />
      <button onClick={clickHandler} className={styles.btn}>
        {show ? <AiOutlineClose /> : <GrFormAdd />}
      </button>
      {transition((style, item) =>
        item ? (
          <animated.div style={style}>
            <AddJoke />
          </animated.div>
        ) : (
          <></>
        )
      )}
    </div>
  );
}

export default App;
