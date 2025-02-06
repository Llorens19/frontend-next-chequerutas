export type IPoint = [number, number] | [number, number, number];

export interface IRoutePoints {
  points : {
    idRoute: string;
    startCoordinates: IPoint;
  }[];
}