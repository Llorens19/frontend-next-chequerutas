import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { IGraphicAltitudeProps } from '@/shared/interfaces/components/graphics/GraphicAltitude.interface';
import { altitudeDistancePoints } from '@/shared/utils/altitudeDistancePoints/altitudeDistancePoints.util';

Chart.register(...registerables);

const GraphicAltitude = ({ coordinates }: IGraphicAltitudeProps) => {
  const points = altitudeDistancePoints(coordinates);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category' as const,
        ticks: {
          callback: (value: any, index: any, values: any) => {
            if (index === 0 || index === values.length - 1) {
              return points[index].distance.toFixed(2).replace('.', ',') + ' km';
            }
            return '';
          }
        }
      },
      y: {
        title: {
          display: true,
        },
        beginAtZero: true,
        suggestedMin: 0,
        suggestedMax: Math.max(...points.map(p => p.altitude))
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context: any) => {
            return `Altura: ${context.raw.y} m`;
          }
        }
      }
    }
  };

  const dataPoints = {
    labels: points.map((punto) => punto.distance.toFixed(2)),
    datasets: [
      {
        data: points.map((punto) => ({ x: punto.distance.toFixed(2), y: punto.altitude })),
        fill: true,
        backgroundColor: 'rgba(0, 90, 0, 0.3)',
        borderColor: 'rgba(0,0,0,1)',
        tension: 0.3
      }
    ]
  };

  return (
    <div className="w-full rounded-lg bg-color2 py-4">
      <div className="w-full max-h-64">
        <Line className="w-full h-full text-text4" data={dataPoints} options={options} />
      </div>
    </div>
  );
};

export default GraphicAltitude;
