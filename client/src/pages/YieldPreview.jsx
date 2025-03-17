import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const YieldPreview = () => {
  // Mock data for the chart
  const data = {
    labels: ["Chain A", "Chain B", "Chain C"],
    datasets: [
      {
        label: "APY (%)",
        data: [5, 3, 4],
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Total Yield ($)",
        data: [1000, 500, 750],
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Mock Yield Aggregator Data" },
    },
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Yield Aggregator Preview (Amana Inspiration)
      </h1>

      {/* Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <Bar data={data} options={options} />
      </div>

      {/* Table of Mock Yields */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">
          Mock Yield Data
        </h2>
        <table className="w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Chain</th>
              <th className="py-2">APY (%)</th>
              <th className="py-2">Total Yield ($)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-2">Chain A</td>
              <td className="py-2">5%</td>
              <td className="py-2">$1,000</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Chain B</td>
              <td className="py-2">3%</td>
              <td className="py-2">$500</td>
            </tr>
            <tr className="border-b">
              <td className="py-2">Chain C</td>
              <td className="py-2">4%</td>
              <td className="py-2">$750</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* General Note about Goerli */}
      <p className="text-gray-600 italic mb-4">
        *Mock data—Goerli testnet is down, so this is under development.
        Inspired by Amana’s omnichain yield aggregator.*
      </p>
    </div>
  );
};

export default YieldPreview;
