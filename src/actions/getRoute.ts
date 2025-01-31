import { IRoute } from '@/shared/interfaces/entities/route.interface';
import { prisma } from '@/libs/prisma';

const getRoute = async (idRoute: string): Promise<IRoute | null> => {
  try {
    const route = await prisma.routes.findUnique({
      where: { idRoute },
      include: {
        category: true,
        user: true,
        location: true,
      },
    });

    return route;
  } catch (error) {
    console.error('Error fetching route:', error);
    return null;
  }
};

export default getRoute;
