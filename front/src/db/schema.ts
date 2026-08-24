import { int, mysqlTable, varchar, text } from 'drizzle-orm/mysql-core';

export const truckTable = mysqlTable('truck_table', {
    id: int().primaryKey().autoincrement(),
    plate: varchar({ length: 7 }).notNull(),
});

export const routeTable = mysqlTable('route_table', {
    id: int().primaryKey().autoincrement(),
    points: text().notNull(),
})