import { getRoutes } from "@/lib/db";

export async function getRoutesList() {
    return await getRoutes()
}