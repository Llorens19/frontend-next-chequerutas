'use client';

import { useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Slider } from '@mui/material';
import Rating from '@mui/material/Rating';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import SelectForm from '@/components/selects/SelectForm';
import SearchFilters from '@/components/searches/SearchFilters';

import useFilterRouteSearchOptions from '@/hooks/components/filters/FilterRoute/useFilterRouteSearchOptions.hook';
import useFilterRouteControl from '@/hooks/components/filters/FilterRoute/useFilterRouteControl.hook';

const FilterRoute = () => {
  const { categoryOptions, locationOptions, titleOptions } =
    useFilterRouteSearchOptions();
  const {
    distanceMax,
    distanceMin,
    level,
    category,
    title,
    location,
    setDistanceMax,
    setDistanceMin,
    setLevel,
    setCategory,
    setTitle,
    setLocation,
    onChangeCategory,
    onChangeLevel,
    onChangeDistance,
    onSelectLocation,
    onSelectTitle,
    onClickDelete,
  } = useFilterRouteControl();

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const encodedFilters = searchParams.get('filters');
    if (encodedFilters) {
      try {
        const {
          distanceMax,
          distanceMin,
          level,
          category,
          title,
          location,
        } = JSON.parse(atob(encodedFilters));

        if (distanceMax) setDistanceMax(distanceMax);
        if (distanceMin) setDistanceMin(distanceMin);
        if (level) setLevel(level);
        if (category) setCategory(category);
        if (title) setTitle(title);
        if (location) setLocation(location);

      } catch (error) {
        console.error('Error al decodificar los filtros de la URL:', error);
      }
    }
  }, []);

  const updateUrl = () => {
    const filters = {
      distanceMax,
      distanceMin,
      level,
      category,
      title,
      location,
    };
    const encodedFilters = btoa(JSON.stringify(filters));

    const params = new URLSearchParams(searchParams);
    params.set('filters', encodedFilters);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    updateUrl();
  }, [distanceMax, distanceMin, level, category, title, location]);

  return (
    <section className="bg-color3 fixed w-full mt-16 z-50 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-16 m-4 mx-20">
        <div className="flex flex-col w-full">
          <label className="text-text1">Dificultad</label>
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
              '& .MuiRating-iconEmpty': { color: '#000000' },
              '& .MuiRating-iconFilled': { color: '#000000' },
              '& .MuiRating-iconHover': { color: '#000000' },
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
          <label className="text-text1">Ubicación</label>
          <SearchFilters
            value={location ?? ''}
            onSelect={onSelectLocation}
            options={locationOptions}
          />
        </div>

        <div className="flex flex-col w-full justify-end">
          <label className="text-text1">Nombre</label>
          <SearchFilters
            value={title ?? ''}
            onSelect={onSelectTitle}
            options={titleOptions}
          />
        </div>

        <div className="flex flex-col w-full justify-end">
          <label className="text-text1">Distancia</label>
          <Slider
            value={[distanceMin, distanceMax]}
            onChange={onChangeDistance}
            valueLabelDisplay="auto"
            disableSwap
            min={0}
            max={40}
            sx={{
              color: '#000000',
              '& .MuiSlider-thumb': { backgroundColor: '#000000' },
              '& .MuiSlider-track': { backgroundColor: '#000000' },
              '& .MuiSlider-rail': { backgroundColor: '#808080' },
            }}
          />
        </div>

        <div className="flex flex-col w-full justify-end">
          <button
            onClick={onClickDelete}
            className="bg-text1 text-color3 p-1.5 rounded-lg border-2 border-text1 hover:bg-color3 hover:text-text1 transition duration-300 text-ms"
          >
            Borrar
          </button>
        </div>
      </div>
    </section>
  );
};

export default FilterRoute;
