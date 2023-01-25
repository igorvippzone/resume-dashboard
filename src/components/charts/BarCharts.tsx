import React from 'react'
import {Bar} from 'react-chartjs-2'
import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const BarCharts = () => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  const data = {
    labels: [2016,2017,2019,2021,2022],
    datasets: [{
      label: 'количество',
      data: [3,5,6,7,9]
    }]
  }
  return (<div style={{height: '100%'}}>
    <Bar data={data} options={options}/>
  </div>
    
  )
}

export default BarCharts