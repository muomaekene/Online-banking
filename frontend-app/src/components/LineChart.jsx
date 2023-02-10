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
      fill: true,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            font: {
              weight: 600,
              size: "12px",
              family: "'Hind', sans-serif",
            },
          },
        },
        x: {
          ticks: {
            font: {
              weight: 600,
              size: "12px",
              family: "'Hind', sans-serif",
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
              family: "'Hind', sans-serif",
            },
          },
        },
      },
    });
  }, []);

  return (
    <Container>
      <Line data={chartData} options={chartOptions} width="400" height="110" />
    </Container>
  );
};

export default LineChart;

const Container = styled.div`
  height: calc(100% - 29px);
  width: 100%;
`;
