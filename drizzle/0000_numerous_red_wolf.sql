CREATE TABLE `chore_assignments` (
	`chore_occurrence_id` int,
	`household_member_id` int,
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`monday_of_week` date);

CREATE TABLE `chore_occurrences` (
	`chore_id` int,
	`day` enum('monday','tuesday','wednesday','thursday','friday','saturday','sunday'),
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`time` time);

CREATE TABLE `chores` (
	`household_id` int,
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text);

CREATE TABLE `household_members` (
	`household_id` int,
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`is_admin` boolean,
	`is_visitor` boolean,
	`user_id` int);

CREATE TABLE `households` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`name` text);

CREATE TABLE `users` (
	`email` text,
	`first_name` text,
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`last_name` text,
	`middle_name` text,
	`profile_picture_url` text);
