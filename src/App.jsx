import "./App.scss";
import { AddJoke } from "./components";
import ViewJoke from "./components/ViewJoke/ViewJoke";

function App() {
  return (
    <div className="App">
      <AddJoke />
      <ViewJoke />
    </div>
  );
}

export default App;
