import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const data = await prisma.skill.findMany({
    include: { category: true },
    orderBy: { order: 'asc' },
  });

  return data;
});
