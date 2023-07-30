import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const data = await prisma.work.findMany({
    orderBy: {
      id: 'desc',
    },
  });

  return data;
});
