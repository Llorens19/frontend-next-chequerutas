import HeaderRoute from '@/compontesPhone/layout/HeaderRoute';
import ListRoute from '@/compontesPhone/lists/ListRoute';

const RoutePageMobile = () => {
  return (
    <>
      <HeaderRoute />
      <div className="my-16">
        <ListRoute />
      </div>
    </>
  );
};

export default RoutePageMobile;
