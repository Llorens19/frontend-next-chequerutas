'use client';

import InputTextForm from '@/components/inputs/InputTextForm';
import { Rating } from '@mui/material';
import { useState } from 'react';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import SearchFilters from '@/components/searches/SearchFilters';
import Propzone from '@/components/dropzones/DropzoneCrateRouteImages';
import DropzoneCreateRouteImages from '@/components/dropzones/DropzoneCrateRouteImages';
import DropzoneGPX from '@/components/dropzones/DropzoneGPX';

const styles = {
  backgroundImage: 'url(\'/images/auth/auth.jpg\')',
  height: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',
};

const CreateRouteForm = () => {
  const [title, setTitle] = useState('');
  const [level, setLevel] = useState(0);
  const [errorEmail, setErrorEmail] = useState('');

  const onChangeLevel = (
    event: React.ChangeEvent<unknown>,
    newValue: number | null
  ) => {
    setLevel(newValue || 0);
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div
          style={styles}
          className="w-3/5 h-full flex justify-center items-center align-middle "
        ></div>
        <div className="w-2/5  flex justify-center items-center align-middle mt-16">
          <div className="flex flex-col gap-6 w-2/3">
            <div className="w-full flex gap-4">
              <div className="w-9/12">
              <InputTextForm
                label="Titulo"
                type="text"
                id="title_input"
                placeholder="Ruta de montaña"
                data={title}
                onChange={setTitle}
                error={errorEmail}
              />
            </div>

              <div className="w-3/12">
                <label className="text-text3">Gpx</label>
                <DropzoneGPX onGPXUpload={(value) => console.log(value)} />
              </div>
            </div>

            <div className="flex gap-4 w-full">
              <div className="w-1/2 items-center">

                <InputTextForm
                  label="Duración"
                  type="text"
                  id="title_input"
                  placeholder="Ruta de montaña"
                  data={title}
                  onChange={setTitle}
                  error={errorEmail}
                />
              </div>

              <div className="w-1/2">
                <div className="flex flex-col w-full">
                  <label className="text-text3">Dificultad</label>

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
                      '& .MuiRating-icon': { fontSize: '2vw' },
                      '& .MuiRating-iconEmpty': { color: 'var(--text3)' },
                      '& .MuiRating-iconFilled': { color: 'var(--text1)' },
                      '& .MuiRating-iconHover': { color: 'var(--text1)' },
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="w-full flex gap-4 ">
              <div className="w-6/12">
                <label className="text-text3">Ubicación</label>
                <SearchFilters
                  colorText="text3"
                  color="color1"
                  value={''}
                  onSelect={() => {}}
                  options={[{ value: '1', label: '1' }]}
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
                      defaultChecked
                      className="w-6 h-6 accent-black"
                    />
                    Sí
                  </label>
                  <label className="flex items-center gap-2 text-text3 text-lg ">
                    <input
                      type="radio"
                      name="public_route"
                      value="no"
                      className="w-6 h-6 accent-black"
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="w-full">
              <textarea
                className="w-full h-40 p-2 border rounded-3xl bg-color1 text-text1"
                placeholder="Descripción de la ruta"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              ></textarea>
            </div>

            <div className="w-full">
              <DropzoneCreateRouteImages onFilesUpload={() => {}} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateRouteForm;
