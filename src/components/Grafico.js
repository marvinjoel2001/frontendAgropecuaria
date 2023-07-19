import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ endpoint, dataAttr1, dataAttr2 }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(endpoint);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [endpoint]);

    const monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const labels = data.map(item => monthNames[item[dataAttr1] - 1]);
    const values = data.map(item => item[dataAttr2]);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: `${dataAttr1} vs ${dataAttr2}`,
                data: values,
                backgroundColor: 'rgba(255, 0, 0, 0.8)', // Rojo fuerte
            },
        ],
    };

    const options = {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: dataAttr1,
                },
            },
            y: {
                title: {
                    display: true,
                    text: dataAttr2,
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Bar Chart',
            },
        },
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
            },
        },
    };

    return <Bar options={options} data={chartData} />;
};

export default BarChart;

