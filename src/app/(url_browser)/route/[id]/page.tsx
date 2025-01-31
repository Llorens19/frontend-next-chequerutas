import getRoute from '@/actions/getRoute';
import DetailsRoute from '@/components/details/DetailsRoute';
import { uuidRegex } from '@/shared/utils/regex/uuidRegex.util';
import { Metadata } from 'next';

export const generateMetadata = async ({ params }: { params: { id: string } }): Promise<Metadata> => {
  const {id} = await Promise.resolve(params);

  if (!id || !uuidRegex(id)) {
    return {};
  }

  console.log('Route ID:', id);
  const data = await getRoute(id);

  return data ? { title: data.title } : {};
};

const Route = async ({ params }: { params: { id: string } }) => {
  const {id} = await Promise.resolve(params);

  if (!id || !uuidRegex(id)) {
    return <p>Error</p>;
  }

  const route = await getRoute(id);

  return <DetailsRoute route={route} />;
};

export default Route;
