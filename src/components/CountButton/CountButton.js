import React, {useState, useEffect} from "react";
import "./CountButton.css";

function CountButton(props) {
  //   let mojCount = 0; umjesto ovoga ide HOOK
  const [mojCount, setMojCount] = useState(0);

  function handleClick() {
    setMojCount(mojCount + props.povecajZa);
    console.log("Stara vrijednost je " + mojCount);
  }

  //Objekt stilova
  const divStyle = {
    color: "black",
    borderBottom: "1px solid gray",
    padding: "10px",
  };

  useEffect(() => {
    console.log("UseEffect called");
  }, []);
  return (
    <div style={divStyle}>
      <button
        className="dugmeCount btn btn-success"
        id={props.ime}
        onClick={handleClick}
      >
        +{props.povecajZa}
      </button>
      <div className="lead">{mojCount}</div>
    </div>
  );
}

export default CountButton;
