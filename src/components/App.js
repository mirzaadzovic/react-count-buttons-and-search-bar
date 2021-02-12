import React, {useEffect, useState} from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";

const App = () => {
  const [podaciState, setPodaciState] = useState([]);
  const stack = [
    "React",
    "ASP .Net Core",
    "SQL Server",
    "Entity Framework Core",
  ];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((podaci) => {
        setTimeout(() => {
          const productTitles = podaci.map((p) => p.title);
          setPodaciState(productTitles);
        }, 2000);
      });
  }, []);

  let hasProducts = podaciState.length > 0;

  return (
    <div>
      <CountButton povecajZa={1} ime={"dugme1"} />
      <CountButton povecajZa={5} ime={"dugme5"} />
      {!hasProducts ? (
        <div className="lead">Loading...</div>
      ) : (
        <SearchBar podaci={podaciState} />
      )}
    </div>
  );
};

export default App;
