"use server"

import { getTrucks } from "@/lib/db"

export default async function getTrucksList() {
    return await getTrucks()
}