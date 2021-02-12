import React, {useState, useEffect} from "react";
import "./SeatchBar.css";

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [addValue, setAddValue] = useState("");
  //   const [stackValue, setStackValue] = useState(stack);

  function handleInputChange(event) {
    setSearchValue(event.target.value);
  }
  function handleAddValue(event) {
    setAddValue(event.target.value);
  }

  function clearSearchInput() {
    setSearchValue("");
  }
  function clearAddInput() {
    setAddValue("");
  }
  function addTechnology() {
    props.podaci.push(addValue);
    clearAddInput();
  }

  let searchClearDisplayed = searchValue.length > 0;
  let addClearDisplayed = addValue.length > 0;

  //   console.log(buttonIsDisplayed);

  const filteredStack = props.podaci.filter((t) => {
    return t.toLowerCase().includes(searchValue.toLowerCase());
  });

  console.log(filteredStack);

  return (
    <div className="searchbar-container">
      <input
        value={addValue}
        onChange={handleAddValue}
        className={"form-control"}
        type="text"
        placeholder="Dodaj..."
      />
      <br />
      <button className="btn btn-primary" onClick={addTechnology}>
        Add
      </button>{" "}
      {addClearDisplayed && (
        <button onClick={clearAddInput} className="btn btn-warning">
          Clear
        </button>
      )}
      <div className="lead">
        <ul>
          {filteredStack.map((t) => {
            return <li key={t}>{t}</li>;
          })}
        </ul>
      </div>
      <input
        value={searchValue}
        className={"form-control"}
        onChange={handleInputChange}
        type="text"
        placeholder="Traži..."
      />
      <br />
      {searchClearDisplayed && (
        <button onClick={clearSearchInput} className="btn btn-warning">
          Clear
        </button>
      )}
    </div>
  );
};

export default SearchBar;
