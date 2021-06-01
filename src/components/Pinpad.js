import React, { useState } from "react";
import Template from "./Template";

function Pinpad() {
  const [pin, setPin] = useState("");
  const [message, setMessage] = useState("");
  const [tries, setTries] = useState(1);

  const clearState = () => {
    setPin("");
    setMessage("LOCKED");
    setTries(1);
  };
  const enterPin = () => {
    if(message === 'LOCKED'){
      return
    }
    setTries(tries + 1);
    if (pin !== "1234") {
      if (tries === 3) {
        setMessage("LOCKED");
        setTimeout(() => {
          setMessage("");
        }, 30000);
        clearState();
      } else {
        setMessage("ERROR");
        setPin("");
      }
    } else {
      setTries(0);
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

 
  const clearPin = () => {
    if(message === 'LOCKED'){
      return
    }
    setPin("");
    setMessage("");
  };

  return (
    <div className="pin-login">
      <div className="text text--error">{message}</div>

      <Template updatePin={updatePin} enterPin={enterPin} clearPin={clearPin} />
    </div>
  );
}
export default Pinpad;
