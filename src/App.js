import "./App.css";
import { Header, Board, Keyboard } from "./Components";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="grid place-items-center ">
        <Board />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
