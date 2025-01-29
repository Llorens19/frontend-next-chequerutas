import { SyntheticEvent, useState } from 'react';

const useFilterRouteControl = () => {

  const [distanceMax, setDistanceMax] = useState<number>(40);
  const [distanceMin, setDistanceMin] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const onChangeCategory = (value: string) => setCategory(value);

  const onChangeLevel = (event: SyntheticEvent, value: number | null) => {
    setLevel(value ?? 0);
  };

  const onChangeDistance = (event: Event, value: number | number[]) => {
    const [min, max] = value as number[];
    setDistanceMin(min);
    setDistanceMax(max);
  };

  const onClickDelete = () => {
    setDistanceMax(40);
    setDistanceMin(0);
    setLevel(0);
    setCategory(null);
  };

  const onSelectLocation = (value: string) => {
    console.log(value);
  };

  const onSelectTitle = (value: string) => {
    console.log(value);
  };

  return {
    distanceMax,
    distanceMin,
    level,
    category,
    onChangeCategory,
    onChangeLevel,
    onChangeDistance,
    onClickDelete,
    onSelectLocation,
    onSelectTitle,
  };
};

export default useFilterRouteControl;