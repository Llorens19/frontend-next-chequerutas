import { ILocation } from '@/interfaces/entities/location.interface';
import { useCateogryFilterQuery } from '@/queries/category.query';
import { useLocationQuery } from '@/queries/location.query';

const useFilterRouteSearchOptions = () => {
    const { data: categoryOptions } = useCateogryFilterQuery();

    const { data: locationOptions } = useLocationQuery();



    const locationOptionsDto = locationOptions?.locations
      ? locationOptions.locations.map((location: ILocation) => ({
          label: location.nLocation,
          value: location.idLocation,
        }))
      : [];

    return {
      categoryOptions,
      locationOptions: locationOptionsDto,
    };

};

export default useFilterRouteSearchOptions;