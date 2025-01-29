import Rating from '@mui/material/Rating';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import { ILevelRatingProps } from '@/interfaces/components/ratings/LevelRating.interface';

const LevelRating = ({ level }: ILevelRatingProps) => {

  const levelNumber = typeof level === 'string' ? parseFloat(level) : level;

  return (
    <Rating
      name="difficulty-rating"
      value={levelNumber}
      precision={0.5}
      max={5}
      readOnly
      icon={<TerrainIcon fontSize="inherit" />}
      emptyIcon={<TerrainOutlinedIcon fontSize="inherit" />}
      sx={{
        display: 'flex',
        width: '50%',
        justifyContent: 'space-between',
        '& .MuiRating-icon': {
          fontSize: '1.5rem',
        },
        '& .MuiRating-iconEmpty': {
          color: '#ffffff',
        },
        '& .MuiRating-iconFilled': {
          color:
            levelNumber >= 5
              ? '#ff0000'
              : levelNumber >= 4
              ? '#ff5722'
              : levelNumber >= 2.5
              ? '#ff9800'
              : '#55ff55',
        },
      }}
    />
  );
};

export default LevelRating;
