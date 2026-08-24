"use server"

import { getRoutes } from "@/lib/db"

export default async function getRoutesList() {
    return await getRoutes()
}