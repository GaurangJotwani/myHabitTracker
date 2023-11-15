import { useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title as ChartTitle,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

ChartJS.register(ArcElement, Tooltip, Legend, ChartTitle);

export const SingleDonut = (props) => {
  const { titleText } = props;
  const initialColors = new Array(30).fill('red');
  const initialData = new Array(30).fill(10); // Assuming each segment has a value of 10
  useEffect(() => {
    ChartJS.register({
      id: 'customTitle',
      beforeDraw: (chart) => {
        const width = chart.width;
        const height = chart.height;
        const ctx = chart.ctx;
        const title = chart.options.plugins.title;

        ctx.save();
        ctx.font = `bold ${title.font.size}px Arial`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const textX = width / 2;
        const textY = height / 2;
        ctx.fillText(title.text, textX, textY);
      },
    });
  }, []);

  const [data, setData] = useState({
    labels: Array.from({ length: 30 }, (_, i) => `Segment ${i + 1}`),
    datasets: [
      {
        data: initialData,
        backgroundColor: initialColors,
      },
    ],
  });

  const onSegmentClick = (event, elements) => {
    if (elements.length > 0) {
      const element = elements[0];
      const dataIndex = element.index;
      const newColor =
        data.datasets[0].backgroundColor[dataIndex] === 'red'
          ? '#ffffff'
          : 'red';

      // Create a deep copy of the data object and update the color
      const newData = JSON.parse(JSON.stringify(data));
      newData.datasets[0].backgroundColor[dataIndex] = newColor;

      setData(newData);
    }
  };

  const options = {
    onClick: onSegmentClick,
    plugins: {
      legend: {
        display: false, // Hide the legend if not required
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
      title: {
        display: false,
        text: titleText,
        color: 'black',
        font: {
          size: 25,
        },
      },
    },
  };

  return (
    <div
      style={{
        width: '400px',
        height: '400px',
        margin: '30px',
      }}
    >
      <Doughnut data={data} options={options} />
    </div>
  );
};

SingleDonut.propTypes = {
  titleText: PropTypes.string.isRequired,
};
