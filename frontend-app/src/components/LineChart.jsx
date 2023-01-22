import { useState, useEffect } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { Line } from "react-chartjs-2";

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
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          ticks: {
            font: {
              family: "'Urbanist', sans-serif",
              weight: 600,
            },
          },
        },
        x: {
          ticks: {
            font: {
              family: "'Urbanist', sans-serif",
              weight: 600,
            },
          },
        },
      },
      plugins: {
        legend: {
          position: "right",
          fullsize: true,
        },
        title: {
          display: false,
          text: "Expenses and Income Data",
        },
      },
    });
  }, []);

  return (
    <Container>
      <Line data={chartData} options={chartOptions} width="400" height="130" />
    </Container>
  );
};

export default LineChart;

const Container = styled.div`
  border-radius: 10px;
  padding: 10px 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  height: 100%;
`;
