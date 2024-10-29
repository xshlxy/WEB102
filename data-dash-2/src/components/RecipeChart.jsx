import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const RecipeChart = ({ recipes }) => {
  const labels = recipes.map(recipe => recipe.title);
  const data = {
    labels,
    datasets: [
      {
        label: 'Recipe Popularity',
        data: recipes.map(() => Math.floor(Math.random() * 100)), // Replace with actual data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allow flexibility in height
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Recipe Popularity Chart',
      },
    },
  };

  return (
    <div style={{ width: '100%', height: '400px', margin: '20px auto' }}> {/* Adjust height as needed */}
      <Bar data={data} options={options} />
    </div>
  );
};

export default RecipeChart;