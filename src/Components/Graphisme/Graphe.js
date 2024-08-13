import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import { Data } from "./Data";
import LineChart from "./LineChart";

Chart.register(CategoryScale);

export default function Graphe() {
  const [chartData] = useState({
    labels: Data.map((data) => data.year), 
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#50AF95",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0"
        ],
        borderColor: "blue",
        borderWidth: 2
      }
    ]
  });

  return (
    <div className="App">
      <LineChart chartData={chartData} />
    </div>
  );
}