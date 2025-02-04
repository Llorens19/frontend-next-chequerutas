import { ILocation } from '@/shared/interfaces/entities/location.interface';
import { useCateogryFilterQuery } from '@/reactQuery/queries/category.query';
import { useLocationsQuery } from '@/reactQuery/queries/location.query';
import { useRouteTitlesQuery } from '@/reactQuery/queries/titles.query';

const useFilterRouteSearchOptions = () => {
    const { data: categoryOptions } = useCateogryFilterQuery();

    const { data: locationOptions } = useLocationsQuery();

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