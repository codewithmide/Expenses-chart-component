import { Chart } from "chart.js";

const chartElement = document.getElementById('chart');
const config = {
    type: 'bar',
    data: {label: ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'],
    dataset: [{label: 'Expenses', data: [2, 5, 3, 2, 1, 2, 5]}] }
}

const barChart = new Chart(chartElement, config);