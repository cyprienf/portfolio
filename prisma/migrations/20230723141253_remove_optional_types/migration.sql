/*
  Warnings:

  - Made the column `name` on table `Skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `logo` on table `Skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `categoryId` on table `Skill` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `SkillCategory` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_categoryId_fkey";

-- AlterTable
ALTER TABLE "Skill" ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "logo" SET NOT NULL,
ALTER COLUMN "categoryId" SET NOT NULL;

-- AlterTable
ALTER TABLE "SkillCategory" ALTER COLUMN "name" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Skill" ADD CONSTRAINT "Skill_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "SkillCategory"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
