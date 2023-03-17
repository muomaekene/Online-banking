import { useState, useEffect } from "react";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";

import { ChartData } from "../utils/uiData";
import styled from "styled-components";

const LineChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const [chartData, setChartData] = useState({ datasets: [] });

  const [chartOptions, setChatOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ChartData.map((data) => data.month),
      datasets: [
        {
          label: "Expenses",
          data: ChartData.map((data) => data.amtSpent),
        },
        {
          label: "Income",
          data: ChartData.map((data) => data.amtEarned),
        },
      ],
    });
    setChatOptions({
      // fill: true,
      pointStyle: false,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            font: {
              weight: 500,
              size: "12px",
              family: "'Figtree', sans-serif",
            },
          },
        },
        x: {
          ticks: {
            font: {
              weight: 500,
              size: "12px",
              family: "'Figtree', sans-serif",
            },
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "right",
          labels: {
            font: {
              weight: 500,
              size: "12px",
              family: "'Figtree', sans-serif",
            },
          },
        },
      },
    });
  }, []);

  return (
    <Container>
      <Line data={chartData} options={chartOptions} width="400" height="129" />
    </Container>
  );
};

export default LineChart;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 15px 10px 15px;
`;
