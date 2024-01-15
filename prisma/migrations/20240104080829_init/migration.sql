/*
  Warnings:

  - You are about to drop the `concierge` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `accounts` MODIFY `id` VARCHAR(255) NOT NULL DEFAULT uuid();

-- DropTable
DROP TABLE `concierge`;
