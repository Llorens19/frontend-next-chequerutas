import { PrismaClient } from '@prisma/client';
import { Prisma } from '.prisma/client';

const prismaClientSingleton = () => {
  const opt: Prisma.PrismaClientOptions = {};

  if (process.env.NODE_ENV === 'development') {
    opt['log'] = ['query', 'info', 'warn', 'error'];
  }
  return new PrismaClient(opt);
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
