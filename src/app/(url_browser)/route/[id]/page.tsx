import CommentsRoute from '@/components/comments/CommentsRoute';
import DetailsRoute from '@/components/details/DetailsRoute';
import { RouteQueryService } from '@/services/queries/route.queryService';
import { uuidRegex } from '@/shared/utils/regex/uuidRegex.util';
import { Metadata } from 'next';

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> => {
  const { id } = await Promise.resolve(params);

  if (!id || !uuidRegex(id)) {
    return {};
  }

  console.log('Route ID:', id);
  const route = await RouteQueryService.getRouteById(id);

  return route ? { title: route.title } : {};
};

const Route = async ({ params }: { params: { id: string } }) => {
  const { id } = await Promise.resolve(params);

  if (!id || !uuidRegex(id)) {
    return <p>Error</p>;
  }

  const route = await RouteQueryService.getRouteById(id);
  if (!route || !uuidRegex(id)) {
    return <p>Error</p>;
  }

  return (
    <>
      <DetailsRoute route={route} />
      <CommentsRoute route={route} />
    </>
  );
};

export default Route;
