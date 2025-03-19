'use client';

import InputTextForm from '@/components/inputs/InputTextForm';
import { Rating, Slider } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import SearchFilters from '@/components/searches/SearchFilters';
import DropzoneCreateRouteImages from '@/components/dropzones/DropzoneCrateRouteImages';
import DropzoneGPX from '@/components/dropzones/DropzoneGPX';
import { titleRegex } from '@/shared/utils/regex/titleRegex.util';
import { durationRegex } from '@/shared/utils/regex/durationRegex.util';
import MapWithRoute from '@/components/maps/MapCreateroute';
import { useCateogryFilterQuery } from '@/reactQuery/queries/category.query';
import SearchLocations from '@/components/searches/SearchLocations';
import { useCreateRouteMutation } from '@/reactQuery/mutations/route.mutations';
import { RouteCommandService } from '@/services/commands/route.commandService';
import { useRouter } from 'next/navigation';
import { useGetUserQuery } from '@/reactQuery/queries/user.query';
import { useSendNotificationMutation } from '@/reactQuery/mutations/notification.mutations';
import DropzoneCreateRouteImagesMobile from '@/compontesPhone/dropzone/DropzoneCreateRouteImagesMobile';

const CreateRouteMobile = () => {
  const [title, setTitle] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [level, setLevel] = useState<number>(0);
  const [location, setLocation] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [isPublic, setIsPublic] = useState<boolean>(true);
  const [coordinates, setCoordinates] = useState<number[][]>([]);
  const [images, setImages] = useState<File[]>([]);
  const [category, setCategory] = useState<string>('');

  const [titleError, setTitleError] = useState<string>('');
  const [durationError, setDurationError] = useState<string>('');
  const [levelError, setLevelError] = useState<string>('');
  const [locationError, setLocationError] = useState<string>('');
  const [coordinatesError, setCoordinatesError] = useState<string>('');
  const [imagesError, setImagesError] = useState<string>('');
  const [categoryError, setCategoryError] = useState<string>('');
  const [descriptionError, setDescriptionError] = useState<string>('');

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const textarea = textareaRef.current;
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [description]);

  const { data: categoryOptions } = useCateogryFilterQuery();

  const creteRoute = useCreateRouteMutation();

  const onChangeLevel = (_: Event, newValue: number | number[]) => {
    setLevel(Array.isArray(newValue) ? newValue[0] : newValue);
  };

  const router = useRouter();

  const { data: userLogged } = useGetUserQuery();

  const sendNotification = useSendNotificationMutation();

  const validateForm = (): boolean => {
    let correct = true;
    const titleError = titleRegex(title);
    const durationError = durationRegex(duration);
    const levelError = level === 0 ? 'Falta la dificultad' : '';
    const locationError = location === '' ? 'Falta la ubicación' : '';
    const coordinatesError = coordinates.length === 0 ? 'Falta la ruta' : '';
    const imagesError = images.length === 0 ? 'Falta alguna imagen' : '';
    const categoryError = category === '' ? 'falta la categoria' : '';
    const descriptionError = description === '' ? 'Falta la descripción' : '';

    if (
      titleError ||
      durationError ||
      levelError ||
      locationError ||
      coordinatesError ||
      imagesError ||
      categoryError ||
      descriptionError
    ) {
      correct = false;
      setTitleError(titleError);
      setDurationError(durationError);
      setLevelError(levelError);
      setLocationError(locationError);
      setCoordinatesError(coordinatesError);
      setImagesError(imagesError);
      setCategoryError(categoryError);
      setDescriptionError(descriptionError);
    }
    return correct;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const urlImages = [];

      for (const image of images) {
        const resp = await RouteCommandService.saveRouteImage(image);
        urlImages.push(resp.url);
      }

      try {
        await creteRoute.mutateAsync({
          title,
          duration: parseInt(duration),
          level,
          idLocation: location,
          description,
          isPublic,
          coordinates,
          imagesRoutes: urlImages,
          idCategory: category,
        });

        await sendNotification.mutateAsync({
          email: userLogged!.email,
          title: 'Nueva ruta creada correctamente',
          body: `Se ha creado una nueva ruta con el título ${title}.`,
          idUser: userLogged!.idUser,
          type: 'success',
        });

        router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="w-3/5 h-screen flex justify-center relative">
        <div className="w-full h-full">
          <MapWithRoute coordinates={coordinates as [number, number][]} />
        </div>
      </div>

      <div className="w-full flex justify-center items-center align-middle p-4 pb-20">
        <div className="flex flex-col gap-4">
          <h1 className = "text-2xl font-bold text-text2 text-center">Crear Ruta</h1>
          <div className="w-full">
            <InputTextForm
              label="Titulo"
              type="text"
              id="title_input"
              placeholder="Ruta de montaña"
              data={title}
              onChange={setTitle}
              error={titleError}
            />
          </div>
          <div className="w-full">
            <label className="text-text3 text-lg">Descripción</label>
            <textarea
              ref={textareaRef}
              className="w-full p-2 pb-3 rounded-3xl bg-color1 text-text1 border-2 border-text1 resize-none overflow-hidden"
              placeholder="Descripción de la ruta"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={1}
            ></textarea>
            <p className="text-red-500 text-sm mt-1">{descriptionError}</p>
          </div>
          <div className="w-full">
            <label className="text-text3">Ubicación</label>
            <SearchLocations onSelect={setLocation} />
            <p className="text-red-500 text-sm mt-1">{locationError}</p>
          </div>
          <div className="w-full">
            <label className="text-text3">{`Dificultad - ${level * 2}`}</label>
            <Slider
              value={level}
              step={0.5}
              min={0}
              max={5}
              onChange={onChangeLevel}
              sx={{
                width: '100%',
                color: 'var(--text1)',
                '& .MuiSlider-thumb': { backgroundColor: 'var(--text1)' },
                '& .MuiSlider-track': { backgroundColor: 'var(--text1)' },
                '& .MuiSlider-rail': { backgroundColor: 'var(--text3)' },
              }}
            />
            <p className="text-red-500 text-sm mt-1">{levelError}</p>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-3/4">
              <label className="text-text3">Categoría</label>
              <SearchFilters
                colorText="text3"
                color="color1"
                value={category}
                onSelect={setCategory}
                options={
                  (categoryOptions as { value: string; label: string }[]) || []
                }
              />
              <p className="text-red-500 text-sm mt-1">{categoryError}</p>
            </div>

            <div className="w-1/4">
              <label className="text-text3">Gpx</label>
              <DropzoneGPX
                onGPXUpload={(value: number[][]) => setCoordinates(value)}
              />
              <p className="text-red-500 text-sm mt-1">{coordinatesError}</p>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-6/12">
              <InputTextForm
                label="Duración"
                type="number"
                id="duration_input"
                placeholder="Duración de la ruta"
                data={duration}
                onChange={setDuration}
                error={durationError}
              />
            </div>
            <div className="w-4/12 flex flex-col justify-center">
              <label className="text-text3">Ruta Pública</label>
              <div className="flex justify-between items-center w-full">
                <label className="flex items-center gap-2 text-text3 text-lg ">
                  <input
                    type="radio"
                    name="public_route"
                    value="yes"
                    checked={isPublic}
                    onChange={() => setIsPublic(true)}
                    className="w-6 h-6 accent-black"
                  />
                  Sí
                </label>
                <label className="flex items-center gap-2 text-text3 text-lg ">
                  <input
                    type="radio"
                    name="public_route"
                    value="no"
                    checked={!isPublic}
                    onChange={() => setIsPublic(false)}
                    className="w-6 h-6 accent-black"
                  />
                  No
                </label>
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="text-text3 text-lg">Imágenes</label>

            <DropzoneCreateRouteImagesMobile
              onFilesUpload={(files: File[]) => setImages(files)}
            />

            <p className="text-red-500 text-sm mt-1">{imagesError}</p>
          </div>
          <button
            className="bg-text1 text-color3 p-1.5 rounded-3xl border-2 border-text1 hover:bg-color1 hover:text-text1 transition duration-300 text-ms"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateRouteMobile;
