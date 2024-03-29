ALTER TABLE `chore_assignments` ADD `time_created` timestamp DEFAULT (now());
ALTER TABLE `chore_assignments` ADD `time_last_updated` timestamp ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `chore_occurrences` ADD `time_created` timestamp DEFAULT (now());
ALTER TABLE `chore_occurrences` ADD `time_last_updated` timestamp ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `chores` ADD `time_created` timestamp DEFAULT (now());
ALTER TABLE `chores` ADD `time_last_updated` timestamp ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `household_members` ADD `time_created` timestamp DEFAULT (now());
ALTER TABLE `household_members` ADD `time_last_updated` timestamp ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `households` ADD `time_created` timestamp DEFAULT (now());
ALTER TABLE `households` ADD `time_last_updated` timestamp ON UPDATE CURRENT_TIMESTAMP;
ALTER TABLE `users` ADD `time_created` timestamp DEFAULT (now());
ALTER TABLE `users` ADD `time_last_updated` timestamp ON UPDATE CURRENT_TIMESTAMP;