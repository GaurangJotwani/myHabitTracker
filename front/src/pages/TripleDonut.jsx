import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register ChartJS plugins
ChartJS.register(ArcElement, Tooltip, Legend);

const outerData = {
  datasets: [
    {
      label: 'Outer Dataset',
      data: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1,
      ],
      backgroundColor: ['red'],
      borderColor: ['black'],
      borderWidth: 2,
      cutout: '60%', // The outer doughnut has a moderate cutout
    },
  ],
};

const middleData = {
  datasets: [
    {
      label: 'Middle Dataset',
      data: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1,
      ],
      backgroundColor: ['green'],
      borderColor: ['black'],
      borderWidth: 2,
      cutout: '70%', // The middle doughnut fits within the outer doughnut
    },
  ],
};

const innerData = {
  datasets: [
    {
      label: 'Inner Dataset',
      data: [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1,
      ],
      backgroundColor: ['orange'],
      borderColor: ['black'],
      borderWidth: 2,
      cutout: '80%', // The innermost doughnut fits within the middle doughnut
    },
  ],
};

const commonOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  animation: {
    animateRotate: false,
    animateScale: true,
  },
};

export const TripleDonut = () => {
  return (
    <div style={{ position: 'relative', width: '300px', height: '300px' }}>
      <Doughnut data={outerData} options={commonOptions} />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Doughnut data={middleData} options={commonOptions} />
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <Doughnut data={innerData} options={commonOptions} />
      </div>
    </div>
  );
};
