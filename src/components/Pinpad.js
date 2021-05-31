import React, { useState } from "react";

function Pinpad() {
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [tries, setTries] = useState(1);

  const enter = () => {
    if (message === "LOCKED") {
      return;
    }
    setTries(tries + 1);
    if (pin !== "1234") {
      if (tries === 3) {
        setMessage("LOCKED");
        setTimeout(() => {
          setMessage("");
        }, 30000);
      } else {
        setMessage("ERROR");
        setPin("");
      }
    } else {
      setTries(1);
      setMessage("OK");
      setPin("");
    }
  };

  const updatePin = (value) => {
    if (message === "LOCKED") {
      return;
    }
    if (pin.length === 4) {
      return;
    }
    setPin((pin) => pin + value);
    if (message === "ERROR" || message === "OK") {
      setMessage("");
    }
    setMessage((message) => message + "*");
  };
  const clear = () => {
    if (message === "LOCKED") {
      return;
    }
    setPin("");
    setMessage("");
  };

  return (
    <div className="pin-login">
      <div className="text text--error">{message}</div>

      <div className="numpad">
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="1"
        >
          1
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="2"
        >
          2
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="3"
        >
          3
        </button>
        <br></br>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="4"
        >
          4
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="5"
        >
          5
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="6"
        >
          6
        </button>
        <br></br>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="7"
        >
          7
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="8"
        >
          8
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="9"
        >
          9
        </button>
        <br></br>
        <button className="keypad" onClick={clear}>
          clear
        </button>
        <button
          className="key"
          onClick={(e) => updatePin(e.target.value)}
          value="0"
        >
          0
        </button>
        <button className="keypad" onClick={enter}>
          enter
        </button>
      </div>
    </div>
  );
}
export default Pinpad;

