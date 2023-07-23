import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const { category } = getQuery(event);

  const data = await prisma.skill.findMany({
    where: {
      categoryId: +category!.toString(),
    },
    orderBy: {
      id: 'asc',
    },
  });

  return data;
});
