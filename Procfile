web: npm run start

release: cd server && npx prisma migrate resolve --rolled-back "20220621055506_change_user_id_to_varchar" && npx prisma migrate deploy 