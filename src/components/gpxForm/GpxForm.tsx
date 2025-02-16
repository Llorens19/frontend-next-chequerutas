'use client';

import { IGpxFormProps } from '@/shared/interfaces/components/gpxForm/GpxForm.interface';
import { saveAs } from 'file-saver';

const GpxForm = ({
  coordinates,
  title,
  description,
  author,
  time,
}: IGpxFormProps) => {
  const generateGPX = () => {
    const gpxHeader = `<?xml version="1.0" encoding="UTF-8"?>\n<gpx version="1.1" creator="GPXGenerator" xmlns="http://www.topografix.com/GPX/1/1">\n  <metadata>\n    <name>${title}</name>\n    <desc>${description}</desc>\n    <author>\n      <name>${author}</name>\n    </author>\n    <time>${time}</time>\n  </metadata>\n  <trk>\n    <name>${title}</name>\n    <trkseg>`;

    const gpxBody = coordinates
      .map(([lat, lon, ele]: number[], index: number) => {
        const pointTime = new Date(
          Date.parse(time) + index * 1000
        ).toISOString();
        return `      <trkpt lat="${lat}" lon="${lon}">\n        <ele>${ele}</ele>\n        <time>${pointTime}</time>\n      </trkpt>`;
      })
      .join('\n');

    const gpxFooter = '    </trkseg>\n  </trk>\n</gpx>';

    const gpxContent = `${gpxHeader}\n${gpxBody}\n${gpxFooter}`;

    const blob = new Blob([gpxContent], { type: 'application/gpx+xml' });
    saveAs(blob, 'track.gpx');
  };
  return (
    <button
    className="bg-text1 text-color3 p-1.5 rounded-3xl border-2 border-text1 hover:bg-color2 hover:text-text1 transition duration-300 text-ms"
    onClick={generateGPX}
  >
    Descargar GPX
  </button>
  );
};

export default GpxForm;
