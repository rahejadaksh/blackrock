// src/components/TrendChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import PropTypes from 'prop-types'; // Import PropTypes

// Register chart components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const TrendChart = ({ trend }) => {
    console.log('Trend:', trend); // Debug log
  
    const data = {
      labels: ['Positive', 'Negative'],
      datasets: [
        {
          label: 'Trend',
          data: [trend === 'positive' ? 1 : 0, trend === 'negative' ? 1 : 0],
          backgroundColor: ['#4caf50', '#f44336'],
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
    };
  
    return <Bar data={data} options={options} />;
  };
  
  
// Add prop types validation
TrendChart.propTypes = {
  trend: PropTypes.string.isRequired, // Validate that trend is a string and is required
};

export default TrendChart;
