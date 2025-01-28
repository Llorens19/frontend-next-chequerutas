'use client';

import Select from '@/components/selects/select';
import { useCateogryFilterQuery } from '@/queries/category.query';

const FilterRoute = () => {
  const { data: categoryOptions } = useCateogryFilterQuery();
  const categorySelected = null;

  const onChangeCategory = (value: string) => {
    console.log('value', value);
  };

  return (
    <div className="flex flex-col mt-16">
      <Select
        label="Selecciona una categoría"
        id="Meses"
        options={categoryOptions ? categoryOptions : []}
        data={categorySelected ?? ''}
        placeholder="Selecciona un mes"
        onDataChange={onChangeCategory}
      />
    </div>
  );
};

export default FilterRoute;
