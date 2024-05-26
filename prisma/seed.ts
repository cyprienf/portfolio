import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.work.create({
    data: {
      id: 1,
      company: 'Polytech Lyon',
      startDate: '2017-09-04 12:00:00',
      endDate: '2020-09-01 06:30:24',
      description: 'Apprentice engineer at Groupama Supports & Services',
      position: 'CS student engineer',
    },
  });

  await prisma.work.create({
    data: {
      id: 2,
      company: 'Groupama Supports & Services',
      startDate: '2017-09-06 05:14:24',
      endDate: '2022-07-04 12:00:00',
      description:
        'Development of microservices in Java / SpringBoot.\nFront-end development in Vue.js / Angular.\nTechnical support.\nApplication deployment on OpenShift.\nDDD architecture / code review / peer programming.\nKanban methodology.',
      position: 'Fullstack engineer',
    },
  });

  await prisma.work.create({
    data: {
      id: 3,
      company: 'PulseLife',
      startDate: '2022-07-12 04:52:09',
      description:
        'Technical redesign of a web application using Vue 3, Vite and Typescript.\nImplementation of a common component library with Vue 3.\nTest implementation with Vitest and Cypress.\nSet up CI workflows with Github Actions.\nCode review / peer programming / Scrum.\n',
      position: 'Frontend engineer',
    },
  });

  await prisma.skillCategory.create({
    data: {
      id: 1,
      name: 'Frontend',
    },
  });

  await prisma.skillCategory.create({
    data: {
      id: 2,
      name: 'Backend',
    },
  });

  await prisma.skillCategory.create({
    data: {
      id: 3,
      name: 'Databases',
    },
  });

  await prisma.skillCategory.create({
    data: {
      id: 4,
      name: 'Tools',
    },
  });

  await prisma.skillCategory.create({
    data: {
      id: 5,
      name: 'DevOps',
    },
  });

  await prisma.skillCategory.create({
    data: {
      id: 6,
      name: 'Languages',
    },
  });

  await prisma.skill.create({
    data: {
      id: 1,
      name: 'Vue',
      logo: 'frontend/vue.png',
      categoryId: 1,
      order: 1,
      enabled: true,
    },
  });

  const nuxt = await prisma.skill.create({
    data: {
      id: 2,
      name: 'Nuxt',
      logo: 'frontend/nuxt.png',
      categoryId: 1,
      order: 2,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 3,
      name: 'Vite',
      logo: 'frontend/vite.png',
      categoryId: 1,
      order: 3,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 4,
      name: 'D3.js',
      logo: 'frontend/d3.png',
      categoryId: 1,
      order: 4,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 5,
      name: 'Leaflet',
      logo: 'frontend/leaflet.png',
      categoryId: 1,
      order: 5,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 6,
      name: 'Cypress',
      logo: 'frontend/vue.png',
      categoryId: 1,
      order: 6,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 7,
      name: 'Sass',
      logo: 'frontend/sass.png',
      categoryId: 1,
      order: 7,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 8,
      name: 'NestJS',
      logo: 'backend/nestjs.png',
      categoryId: 2,
      order: 8,
      enabled: true,
    },
  });

  const prismaSkill = await prisma.skill.create({
    data: {
      id: 9,
      name: 'Prisma',
      logo: 'backend/prisma.png',
      categoryId: 2,
      order: 9,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 10,
      name: 'Postgresql',
      logo: 'databases/postgresql.png',
      categoryId: 3,
      order: 11,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 12,
      name: 'Git',
      logo: 'tools/git.png',
      categoryId: 4,
      order: 12,
      enabled: true,
    },
  });

  const supabase = await prisma.skill.create({
    data: {
      id: 13,
      name: 'Supabase',
      logo: 'tools/supabase.png',
      categoryId: 4,
      order: 13,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 14,
      name: 'Github Actions',
      logo: 'frontend/github-actions.png',
      categoryId: 5,
      order: 14,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 15,
      name: 'Javascript',
      logo: 'languages/javascript.png',
      categoryId: 6,
      order: 15,
      enabled: true,
    },
  });

  await prisma.skill.create({
    data: {
      id: 16,
      name: 'Typescript',
      logo: 'languages/typescript.png',
      categoryId: 6,
      order: 16,
      enabled: true,
    },
  });

  await prisma.project.create({
    data: {
      id: 1,
      name: 'Portfolio',
      description: 'Personal portfolio built with Nuxt 3, Supabase and Prisma.',
      github: 'https://github.com/cyprienf/portfolio',
      link: 'https://portfolio-cyprien.netlify.app/',
      image: '',
      skills: {
        connect: [nuxt, prismaSkill, supabase],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
