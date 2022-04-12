-- CreateTable
CREATE TABLE "journal_entries" (
    "id" INTEGER NOT NULL,
    "date_and_time_created" VARCHAR(50),
    "date_and_time_last_modified" VARCHAR(50),
    "title" VARCHAR(200),
    "content" TEXT,
    "testField" TEXT,
    "user_id" INTEGER,

    CONSTRAINT "journal_entries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL,
    "first_name" VARCHAR(25),
    "last_name" VARCHAR(25),
    "email_address" VARCHAR(40),
    "password" VARCHAR(50),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "journal_entries" ADD CONSTRAINT "journal_entries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
