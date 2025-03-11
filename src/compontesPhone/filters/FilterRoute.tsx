'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Slider } from '@mui/material';
import Rating from '@mui/material/Rating';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import SelectForm from '@/components/selects/SelectForm';
import SearchFilters from '@/components/searches/SearchFilters';
import { motion } from 'framer-motion';
import useFilterRouteSearchOptions from '@/hooks/components/filters/FilterRoute/useFilterRouteSearchOptions.hook';
import useFilterRouteControl from '@/hooks/components/filters/FilterRoute/useFilterRouteControl.hook';
import MobileIcons from '@/compontesPhone/SVGs/MobileIcons';

const FiltersRoute = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();

  const onClickFilters = () => {
    setIsFiltersOpen(true);
    window.history.pushState({ modalOpen: true }, '');
  };

  const closeFilters = () => {
    setIsFiltersOpen(false);
    window.history.back();
  };

  useEffect(() => {
    const handleBackButton = () => {
      if (isFiltersOpen) {
        setIsFiltersOpen(false);
        return;
      }
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [isFiltersOpen]);

  const { categoryOptions, locationOptions, titleOptions } = useFilterRouteSearchOptions();
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

  useEffect(() => {
    const encodedFilters = searchParams.get('filters');
    if (encodedFilters) {
      try {
        const { distanceMax, distanceMin, level, category, title, location } =
          JSON.parse(atob(encodedFilters));

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
  }, [searchParams]);

  const updateUrl = () => {
    const filters = { distanceMax, distanceMin, level, category, title, location };
    const encodedFilters = btoa(JSON.stringify(filters));

    const params = new URLSearchParams(searchParams);
    params.set('filters', encodedFilters);

    router.replace(`?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    updateUrl();
  }, [distanceMax, distanceMin, level, category, title, location]);

  return (
    <>
      <div className="w-full flex justify-end items-end" onClick={onClickFilters}>
        <MobileIcons size="34px" color="var(--text1)" icon="filters" />
      </div>

      {isFiltersOpen && (
        <motion.div
          className="fixed w-screen h-screen bg-color2 top-0 left-0 z-[100000]"
          initial={{ y: '100%' }}
          animate={{ y: isFiltersOpen ? '0%' : '100%' }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <div className="w-full grid grid-cols-1 gap-16 px-8 mt-6">
            <div className="flex flex-col w-full justify-end">
              <label className="text-text1">Ubicación</label>
              <SearchFilters value={location ?? ''} onSelect={onSelectLocation} options={locationOptions} />
            </div>

            <div className="flex flex-col w-full justify-end">
              <label className="text-text1">Nombre</label>
              <SearchFilters value={title ?? ''} onSelect={onSelectTitle} options={titleOptions} />
            </div>

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
                  '& .MuiRating-iconEmpty': { color: 'var(--text1)' },
                  '& .MuiRating-iconFilled': { color: 'var(--text1)' },
                  '& .MuiRating-iconHover': { color: 'var(--text1)' },
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
              <label className="text-text1">{`Distancia ${distanceMin} - ${distanceMax} km`}</label>
              <Slider
                value={[distanceMin, distanceMax]}
                onChange={onChangeDistance}
                valueLabelDisplay="auto"
                disableSwap
                min={0}
                max={40}
                sx={{
                  color: 'var(--text1)',
                  '& .MuiSlider-thumb': { backgroundColor: 'var(--text1)' },
                  '& .MuiSlider-track': { backgroundColor: 'var(--text1)' },
                  '& .MuiSlider-rail': { backgroundColor: '#808080' },
                }}
              />
            </div>

            <div className="flex flex-col w-full justify-end">
              <button
                onClick={onClickDelete}
                className="bg-text1 text-color3 p-1.5 rounded-3xl border-2 border-text text-ms"
              >
                Borrar
              </button>
            </div>

            <div className="flex flex-col w-full justify-end">
              <button
                onClick={closeFilters}
                className="bg-gray-600 text-white p-1.5 rounded-3xl border-2 border-gray-500 text-ms"
              >
                Cerrar
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default FiltersRoute;
