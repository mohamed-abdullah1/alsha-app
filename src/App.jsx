import { AddJoke, ViewJoke } from "./components";
import { Routes, Route } from "react-router-dom";
import styles from "./App.module.scss";
function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<ViewJoke />} />
        <Route path="/add-joke" element={<AddJoke />} />
      </Routes>
    </div>
  );
}

export default App;
