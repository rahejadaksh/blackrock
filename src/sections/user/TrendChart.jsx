import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types';

// Register chart components
Chart.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const TrendChart = ({ trend }) => {
  console.log('Trend:', trend); // Debug log

  // Determine the color based on trend
  const lineColor = trend === 'positive' ? '#4caf50' : '#f44336';

  const data = {
    labels: ['Trend'], // Single label for simplicity
    datasets: [
      {
        label: 'Trend',
        data: [1], // Only one data point
        borderColor: lineColor,
        backgroundColor: 'transparent', // No fill color
        borderWidth: 2,
        tension: 0.1, // Smooth line
        pointRadius: 0, // No points
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: ({ label, raw }) => `${label}: ${raw}`,
        },
      },
    },
    scales: {
      x: {
        display: false, // Hide x-axis
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

// Add prop types validation
TrendChart.propTypes = {
  trend: PropTypes.string.isRequired, // Validate that trend is a string and is required
};

export default TrendChart;
