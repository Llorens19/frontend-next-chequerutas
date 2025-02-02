import { IOptionSelect } from '@/shared/interfaces/components/selects/Select.interface';
import { ICategories, ICategory } from '@/shared/interfaces/entities/category.interface';

export const categoryFilterDto = (data: ICategories): IOptionSelect[] => {

  const { categories } = data;

  return categories.map((category: ICategory) => ({
    label: category.nameCategory,
    value: category.idCategory,
  }));
};