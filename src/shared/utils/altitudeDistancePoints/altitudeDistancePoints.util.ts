import { IPointAltitudeDistance } from '@/shared/interfaces/components/graphics/GraphicAltitude.interface';
import { ICoordenate } from '@/shared/interfaces/entities/coordinate.interface';


export const altitudeDistancePoints = (coordinates: ICoordenate[]): IPointAltitudeDistance[] => {
  const radEarth = 6371000;
  let totalDistance = 0;
  const result: IPointAltitudeDistance[] = [{ distance: 0, altitude: coordinates[0][2] }];

  for (let i = 0; i < coordinates.length - 1; i++) {
    const [latStart, longStart] = coordinates[i];
    const [latEnd, longEnd, altEnd] = coordinates[i + 1];

    const latStartRads = (latStart * Math.PI) / 180;
    const latEndRads = (latEnd * Math.PI) / 180;
    const difLat = ((latEnd - latStart) * Math.PI) / 180;
    const difLong = ((longEnd - longStart) * Math.PI) / 180;

    const haversine =
      Math.sin(difLat / 2) ** 2 +
      Math.cos(latStartRads) *
        Math.cos(latEndRads) *
        Math.sin(difLong / 2) ** 2;
    const angCent = 2 * Math.atan2(Math.sqrt(haversine), Math.sqrt(1 - haversine));
    const distanceBetweenPoints = radEarth * angCent;

    totalDistance += distanceBetweenPoints;
    result.push({ distance: totalDistance / 1000, altitude: altEnd });
  }

  return result;
};