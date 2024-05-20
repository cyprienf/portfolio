/*
  Warnings:

  - You are about to drop the column `dataVizId` on the `Skill` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Skill" DROP CONSTRAINT "Skill_dataVizId_fkey";

-- AlterTable
ALTER TABLE "Skill" DROP COLUMN "dataVizId";

-- CreateTable
CREATE TABLE "_DataVizToSkill" (
    "A" SMALLINT NOT NULL,
    "B" SMALLINT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_DataVizToSkill_AB_unique" ON "_DataVizToSkill"("A", "B");

-- CreateIndex
CREATE INDEX "_DataVizToSkill_B_index" ON "_DataVizToSkill"("B");

-- AddForeignKey
ALTER TABLE "_DataVizToSkill" ADD CONSTRAINT "_DataVizToSkill_A_fkey" FOREIGN KEY ("A") REFERENCES "DataViz"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_DataVizToSkill" ADD CONSTRAINT "_DataVizToSkill_B_fkey" FOREIGN KEY ("B") REFERENCES "Skill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
