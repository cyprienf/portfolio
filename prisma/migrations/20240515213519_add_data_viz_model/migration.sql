/*
  Warnings:

  - Made the column `createdAt` on table `Project` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `SkillCategory` required. This step will fail if there are existing NULL values in that column.
  - Made the column `createdAt` on table `Work` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Project" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Skill" ADD COLUMN     "dataVizId" SMALLINT,
ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "SkillCategory" ALTER COLUMN "createdAt" SET NOT NULL;

-- AlterTable
ALTER TABLE "Work" ALTER COLUMN "createdAt" SET NOT NULL;

-- CreateTable
CREATE TABLE "DataViz" (
    "id" SMALLSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" VARCHAR NOT NULL DEFAULT '',
    "thumnail" VARCHAR DEFAULT '',
    "github" VARCHAR DEFAULT '',
    "link" VARCHAR DEFAULT '',
    "description" TEXT DEFAULT '',

    CONSTRAINT "DataViz_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_dataVizId_fkey" FOREIGN KEY ("dataVizId") REFERENCES "DataViz"("id") ON DELETE SET NULL ON UPDATE CASCADE;
