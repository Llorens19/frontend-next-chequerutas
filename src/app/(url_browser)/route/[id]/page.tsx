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
  try {
    const { id } = await Promise.resolve(params);

    if (!id || !uuidRegex(id)) {
      return {};
    }

    console.log('Route ID:', id);
    const route = await RouteQueryService.getRouteById(id);

    return route ? { title: route.title } : {};
  } catch (error) {
    return {};
  }
};

const Route = async ({ params }: { params: { id: string } }) => {
  const { id } = await Promise.resolve(params);


  return (
    <>
      <DetailsRoute idRoute={id} />
    </>
  );
};

export default Route;
