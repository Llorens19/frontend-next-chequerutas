
import { CategoryQueryService } from '@/services/queries/category.queryService';
import { categoryFilterDto } from '@/shared/dto/categoryFilter.dto';
import { useQuery } from '@tanstack/react-query';

// export const useCategoryQuery = () => {
//   return useQueries({
//     queries: [
//       {
//         queryKey: ['category', 'filters'],
//         queryFn: async () => categoryFilterDto(await CategoryService.getCategories()),
//         staleTime: 20000,
//       },
//       {
//         queryKey: ['category', 'all'],
//         queryFn: CategoryService.getCategories,
//         staleTime: 20000,
//       },
//     ],
//   });
// };

export const useCategoryQuery = () =>
  useQuery({
    queryKey: ['category', 'all'],
    queryFn: CategoryQueryService.getCategories,
    staleTime: 200000,
  });


export const useCateogryFilterQuery = () =>
  useQuery({
    queryKey: ['category', 'filters'],
    queryFn: async () => categoryFilterDto(await CategoryQueryService.getCategories()),
    staleTime: 200000,
  });
