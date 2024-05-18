import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async () => {
  const data = await prisma.dataViz.findMany({
    include: { skills: true },
  });

  return data;
});
