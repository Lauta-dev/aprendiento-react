import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [abc, setAbc] = useState([]);

  useEffect(() => {
    const evento = ({ key }) => {
      setAbc((prevAbc) => [...prevAbc, key]);
    };

    if (startGame) {
      window.addEventListener("keyup", evento);
    }

    return () => {
      console.log(`Limpito`);
      window.removeEventListener("keyup", evento);
    };
  }, [startGame]);

  const a = "palabra";

  useEffect(() => {
    const enterKey = ({ key }) => {
      if (key == "Enter" && abc.join("") === a) {
        console.log("logrado");
      }
    };

    window.addEventListener("keyup", enterKey);

    return () => {
      window.removeEventListener("keyup", enterKey);
    };
  }, [startGame]);

  const handelClick = () => {
    setStartGame(!startGame);
  };

  return (
    <main className="main">
      <h1>Typing Game</h1>
      <div className="estilo">{abc.join("")}</div>
      <div className="refran">
        <p>pablito clavo un clavito</p>
      </div>
      <button onClick={handelClick}>
        {startGame ? "Stop" : "Start"} Typing Game
      </button>
    </main>
  );
}

export default App;
