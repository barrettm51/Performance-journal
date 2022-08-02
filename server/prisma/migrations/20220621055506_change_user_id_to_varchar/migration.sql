/*
  Changes: 
    - change user_id to varchar on users table
    - add uuid to journal_entries table

  Warnings:

  - The primary key for the `journal_entries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `user_id` on table `journal_entries` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "journal_entries" DROP CONSTRAINT "journal_entries_user_id_fkey";

-- AlterTable
ALTER TABLE "journal_entries" DROP CONSTRAINT "journal_entries_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "user_id" SET DATA TYPE VARCHAR(60),
ADD CONSTRAINT "journal_entries_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ALTER COLUMN "id" SET DATA TYPE VARCHAR(60),
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
