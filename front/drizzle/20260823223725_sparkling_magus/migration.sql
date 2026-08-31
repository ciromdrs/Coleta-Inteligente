CREATE TABLE `route_table` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`points` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `truck_table` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`plate` varchar(7) NOT NULL
);
