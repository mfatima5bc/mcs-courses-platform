/*
  Warnings:

  - The values [PEDING] on the enum `PruchaseStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "PruchaseStatus_new" AS ENUM ('PENDING', 'APPROVED', 'FAILED');
ALTER TABLE "Purchase" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Purchase" ALTER COLUMN "status" TYPE "PruchaseStatus_new" USING ("status"::text::"PruchaseStatus_new");
ALTER TYPE "PruchaseStatus" RENAME TO "PruchaseStatus_old";
ALTER TYPE "PruchaseStatus_new" RENAME TO "PruchaseStatus";
DROP TYPE "PruchaseStatus_old";
ALTER TABLE "Purchase" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;

-- AlterTable
ALTER TABLE "Purchase" ALTER COLUMN "status" SET DEFAULT 'PENDING';
