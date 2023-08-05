/*
  Warnings:

  - You are about to drop the column `name` on the `Project` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Project" DROP COLUMN "name",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "github" VARCHAR DEFAULT '',
ADD COLUMN     "image" VARCHAR NOT NULL DEFAULT '',
ADD COLUMN     "link" VARCHAR DEFAULT '',
ADD COLUMN     "title" VARCHAR NOT NULL DEFAULT '';
