'use client';

import { useEffect, useState, SyntheticEvent } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Slider } from '@mui/material';
import Rating from '@mui/material/Rating';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import SelectForm from '@/components/selects/SelectForm';
import SearchFilters from '@/components/searches/SearchFilters';
import { useCateogryFilterQuery } from '@/queries/category.query';

const FilterRoute = () => {
  const [distanceMax, setDistanceMax] = useState<number>(40);
  const [distanceMin, setDistanceMin] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [category, setCategory] = useState<string | null>(null);

  const { data: categoryOptions } = useCateogryFilterQuery();

  const router = useRouter();
  const searchParams = useSearchParams();

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

  const updateRoute = () => {
    const filters = { distanceMax, distanceMin, level, category };
    const encodedFilters = btoa(JSON.stringify(filters));

    const params = new URLSearchParams(searchParams);
    params.set('filters', encodedFilters);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    updateRoute();
  }, [distanceMax, distanceMin, level, category]);

  return (
    <section className="bg-color3 fixed w-full mt-16 z-50">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-16 m-4 mx-20">
        <div className="flex flex-col w-full">
          <label className="text-white">Dificultad</label>
          <Rating
            name="difficulty-rating"
            value={level}
            precision={0.5}
            max={5}
            onChange={onChangeLevel}
            icon={<TerrainIcon fontSize="inherit" />}
            emptyIcon={<TerrainOutlinedIcon fontSize="inherit" />}
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'space-between',
              '& .MuiRating-icon': { fontSize: '2.5rem' },
              '& .MuiRating-iconEmpty': { color: '#ffffff' },
              '& .MuiRating-iconFilled': { color: '#ffffff' },
              '& .MuiRating-iconHover': { color: '#ffffff' },
            }}
          />
        </div>

        <div className="w-full">
          <SelectForm
            label="Categoría"
            id="Meses"
            options={categoryOptions || []}
            data={category ?? ''}
            placeholder="Selecciona un mes"
            onDataChange={onChangeCategory}
          />
        </div>

        <div className="flex flex-col w-full justify-end">
          <label className="text-white">Ubicación</label>
          <SearchFilters />
        </div>

        <div className="flex flex-col w-full justify-end">
          <label className="text-white">Nombre</label>
          <SearchFilters />
        </div>

        <div className="flex flex-col w-full justify-end">
          <label className="text-white">Distancia</label>
          <Slider
            value={[distanceMin, distanceMax]}
            onChange={onChangeDistance}
            valueLabelDisplay="auto"
            disableSwap
            min={0}
            max={40}
            sx={{
              color: '#ffffff',
              '& .MuiSlider-thumb': { backgroundColor: '#ffffff' },
              '& .MuiSlider-track': { backgroundColor: '#ffffff' },
              '& .MuiSlider-rail': { backgroundColor: '#808080' },
            }}
          />
        </div>

        <div className="flex flex-col w-full justify-end">
          <button
            onClick={onClickDelete}
            className="bg-white text-color3 p-1.5 rounded-lg border-2 border-white hover:bg-color3 hover:text-white transition duration-300 text-ms"
          >
            Borrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterRoute;
