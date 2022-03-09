-- CREATE TABLE users (
-- 	id integer PRIMARY KEY,
-- 	first_name varchar(25),
-- 	last_name varchar(25),
-- 	email_address varchar(40),
-- 	password varchar(50)
-- );

-- CREATE TABLE journal_entries (
-- 	id integer PRIMARY KEY,
-- 	date_and_time_created varchar(50),
-- 	date_and_time_last_modified varchar(50),
-- 	title varchar(200),
-- 	content text,
-- 	user_id integer REFERENCES users(id)
-- );

INSERT INTO users(id, first_name, last_name, email_address, password)
VALUES (1, 'Barrett', 'Nelson', 'barrettm51@gmail.com', 'worldsbestpassword'),
(2, 'Cass', 'Goll', 'cass@cass.com', 'passwordisCass');


INSERT INTO journal_entries (id, date_and_time_created, date_and_time_last_modified, title, content, user_id)
VALUES (0, '2/24/2022 3:43pm', '2/24/2022 3:43pm', 'Cheers to my first journal entry', 'I cannot wait to have this app finished!', 1),
(1, '2/25/2022 10:00am', '2/26/2022 4:32pm', '2nd time around!', 'databases are so exciting', 1), 
(2, '2/25/2022 3:50pm', '2/25/2022 8:55pm', 'They say the 3rd time is the charm', 'Como estas', 1);







