import getRoute from '@/actions/getRoute';
import DetailsRoute from '@/components/details/DetailsRoute';
import { uuidRegex } from '@/utils/regex/uuidRegex.util';
import { Metadata } from 'next';

export const generateMetadata = async ({params}: { params: { id: string } }): Promise<Metadata> => {

  let data;
  if (!params.id || !uuidRegex(params.id)) {
    data =  null;
  }else{
    console.log('Route ID:', params.id);
  data = await getRoute(params.id);
  }



  return data ? { title: data.title } : {};
};

const Route = async ({ params }: { params: { id: string } }) => {
  console.log('Route ID:', params.id);

  if (!params.id || !uuidRegex(params.id)) {
    return <p>Error</p>;
  }
  const route = await getRoute(params.id);


  return (
    <>
      <DetailsRoute route={route}/>
    </>
  );
};

export default Route;
