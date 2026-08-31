"use server"

import { getRoute } from "@/lib/db"

export async function getRouteUpate(id: number){
    return await getRoute(id)
}