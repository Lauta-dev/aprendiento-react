import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [enabled, setEnabled] = useState(false);
  const [position, setPosition] = useState({x: 0, y: 0})

  useEffect(() => {
    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({x: clientX, y: clientY})
    };
    console.log(enabled);

    if (enabled) {
      console.log(enabled);
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove)
    }
  }, [enabled]);

  const handelClick = () => {
    setEnabled(!enabled)
  }

  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x || "200"}px, ${position.y || "200"}px)`,
        }}
      />
      <button onClick={handelClick}>{enabled ? "Desactivar" : "Activar"} cursor</button>
    </>
  );
}

export default App;
