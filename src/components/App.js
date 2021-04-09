import React, {useEffect, useState} from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";
import Chart from "./Chart/Chart";

const App = () => {
  const [podaciState, setPodaciState] = useState([]);
  const stack = [
    "React",
    "ASP .Net Core",
    "SQL Server",
    "Entity Framework Core",
  ];
  const izboriRezultat = {
    chartData: {
      labels: ["DPS", "ZBB", "MNN", "Kumara", "SDP", "SD", "BS", "AL", "AKJ"],
      datasets: [
        {
          label: "Izbori 2020.",
          data: [34.9, 32.7, 12.6, 5.6, 3.1, 4.2, 4.2, 1.4, 1.2],
          backgroundColor: [
            "#B61E1E",
            "lightblue",
            "#F1E158",
            "#A95EA6",
            "#D6B986",
            "#E395B4",
            "#64B879",
            "#946E8E",
            "#C4793B",
          ],
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Crnogorski parlamentarni izbori 2020.",
        fontsize: 25,
      },
      legend: {
        display: true,
        position: "right",
      },
      maintainAspectRatio: true,
    },
  };

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
      <Chart chartData={izboriRezultat} />
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
