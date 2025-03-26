import HomePage from '@/components/pages/HomePage';
import { CategoryQueryService } from '@/services/queries/category.queryService';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Inicio',
  description: 'Página de inicio de la aplicación',
};

const Home = async () => {
  const { categories } = await CategoryQueryService.getCategories();

  console.log(categories);

  return (
    <>
      <HomePage categories={categories} />
    </>
  );
};

export default Home;
