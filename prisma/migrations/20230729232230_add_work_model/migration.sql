-- CreateTable
CREATE TABLE "Work" (
    "id" SMALLSERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "company" VARCHAR NOT NULL DEFAULT '',
    "startDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Work_pkey" PRIMARY KEY ("id")
);