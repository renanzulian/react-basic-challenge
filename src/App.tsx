import React, { useState } from "react";
import "./App.css";

function App() {
  const [circles, setCircles] = useState<HTMLElement[]>([]);
  const [hiddenCircles, setHiddenCCircles] = useState<HTMLElement[]>([]);

  function addCircle({ clientX, clientY }: React.MouseEvent<HTMLElement>) {
    const positionX = clientX - 10 + "px";
    const positionY = clientY - 10 + "px";
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.style.left = positionX;
    circle.style.top = positionY;
    // circle.style.zIndex = String(circles.length + 1);
    setCircles([...circles, circle]);
    document.getElementById("container")?.appendChild(circle);
  }

  function unDo() {
    const circle = circles.pop();
    if (circle) {
      circle.style.visibility = "hidden";
      setHiddenCCircles([...hiddenCircles, circle]);
      setCircles([...circles]);
    }
  }

  function reDo() {
    const circle = hiddenCircles.pop();
    if (circle) {
      circle.style.visibility = "visible";
      setHiddenCCircles([...hiddenCircles]);
      setCircles([...circles, circle]);
    }
  }

  return (
    <>
      <div id="container" onClick={addCircle}></div>
      <div className="buttons">
        <button onClick={unDo} className="undo-btn">
          Undo
        </button>
        <button onClick={reDo} className="undo-btn">
          Redo
        </button>
      </div>
    </>
  );
}

export default App;
