/*
  Warnings:

  - You are about to drop the column `thumnail` on the `DataViz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "DataViz" DROP COLUMN "thumnail",
ADD COLUMN     "thumbnail" VARCHAR DEFAULT '';
