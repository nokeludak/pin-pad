const Template = ({ updatePin, clearPin, enterPin }) => {
  return (
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
      <button className="keypad" onClick={clearPin}>
        clear
      </button>
      <button
        className="key"
        onClick={(e) => updatePin(e.target.value)}
        value="0"
      >
        0
      </button>
      <button className="keypad" onClick={enterPin}>
        enter
      </button>
    </div>
  );
};

export default Template;
