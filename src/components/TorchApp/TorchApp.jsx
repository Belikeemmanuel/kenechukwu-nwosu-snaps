import React, { useState } from "react";
import "./TorchApp.scss";

const TorchApp = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({ x: event.pageX, y: event.pageY });
  };

  return (
    <div className="torch-body" onMouseMove={handleMouseMove}>
      <h1>404 Error</h1>
      <h2>Uh, Ohh</h2>
      <h3>
        Sorry we can't find what you are looking for 'cuz it's so dark in here
      </h3>
      <div
        className="torch"
        style={{
          top: position.y,
          left: position.x,
        }}
      ></div>
    </div>
  );
};

export default TorchApp;
