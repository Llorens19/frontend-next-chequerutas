import Rating from '@mui/material/Rating';
import TerrainIcon from '@mui/icons-material/Terrain';
import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import { ILevelRatingProps } from '@/shared/interfaces/components/ratings/LevelRating.interface';

const LevelRating = ({ level }: ILevelRatingProps) => {



  return (
    <Rating
      name="difficulty-rating"
      value={level}
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
          color: 'var(--text1)',
        },
        '& .MuiRating-iconFilled': {
          color:
            level >= 5
              ? '#ff0000'
              : level >= 4
              ? '#ff5722'
              : level >= 2.5
              ? '#ff9800'
              : '#55ff55',
        },
      }}
    />
  );
};

export default LevelRating;
