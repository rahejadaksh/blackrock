// src/components/InvestmentChart.jsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Box, Typography } from '@mui/material'; // Import MUI components

// Register components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InvestmentChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    datasets: [
      {
        label: 'Microsoft',
        data: [85, 87, 89, 90, 92, 94, 93, 95],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderDash: [], // Solid line
        fill: false,
      },
      {
        label: 'Tesla',
        data: [80, 82, 85, 88, 91, 89, 90, 92],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderDash: [5, 5], // Dashed line
        fill: false,
      },
      {
        label: 'NVIDIA',
        data: [78, 80, 82, 84, 87, 88, 86, 88],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderDash: [10, 5], // Dotted line
        fill: false,
      },
      {
        label: 'Adobe',
        data: [82, 84, 86, 88, 90, 91, 90, 93],
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderDash: [15, 5], // Mixed dashed and solid line
        fill: false,
      },
      {
        label: 'Apple',
        data: [88, 89, 91, 92, 94, 95, 94, 96],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderDash: [], // Solid line
        fill: false,
      },
      {
        label: 'Alphabet',
        data: [84, 85, 87, 89, 91, 93, 92, 94],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderDash: [5, 5], // Dashed line
        fill: false,
      },
      {
        label: 'Amazon',
        data: [81, 83, 85, 87, 90, 91, 89, 92],
        borderColor: 'rgba(255, 206, 86, 1)',
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderDash: [10, 5], // Dotted line
        fill: false,
      },
      {
        label: 'Johnson & Johnson',
        data: [86, 88, 90, 92, 94, 95, 94, 97],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderDash: [15, 5], // Mixed dashed and solid line
        fill: false,
      },
      {
        label: 'Pfizer',
        data: [79, 81, 83, 86, 89, 90, 88, 91],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderDash: [], // Solid line
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `Value: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          callback: (value) => `${value}`,
        },
      },
    },
    elements: {
      line: {
        borderWidth: 2,
        borderDash: [],
        tension: 0.4, // Smooth curve
      },
    },
    animation: {
      duration: 2000, // Duration of animation
      easing: 'easeInOutQuart', // Animation easing function
    },
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 20,
        right: 20,
      },
    },
  };

  return (
    <Box sx={{ width: '100%', height: '400px', backgroundColor: 'white', padding: '20px', mt: 4 }}>
      <Typography variant="h6" component="div" gutterBottom>
        Top ESG Investment Companies
      </Typography>
      <Line data={data} options={options} />
    </Box>
  );
};

export default InvestmentChart;
