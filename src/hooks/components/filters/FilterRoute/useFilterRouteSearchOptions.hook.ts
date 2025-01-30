import { ILocation } from '@/interfaces/entities/location.interface';
import { useCateogryFilterQuery } from '@/queries/category.query';
import { useLocationQuery } from '@/queries/location.query';
import { useRouteTitlesQuery } from '@/queries/titles.query';

const useFilterRouteSearchOptions = () => {
    const { data: categoryOptions } = useCateogryFilterQuery();

    const { data: locationOptions } = useLocationQuery();

    const {data: titleOptions} = useRouteTitlesQuery();


    const titleOptionsDto = titleOptions ? titleOptions.map((title: string) => ({
          label: title,
          value: title,
        }))
      : [];



    const locationOptionsDto = locationOptions?.locations
      ? locationOptions.locations.map((location: ILocation) => ({
          label: location.nLocation,
          value: location.idLocation,
        }))
      : [];

    return {
      categoryOptions,
      locationOptions: locationOptionsDto,
      titleOptions: titleOptionsDto,
    };

};

export default useFilterRouteSearchOptions;