"use server"

import { getTruck } from "@/lib/db";

export default async function getUpdateTruck(id: number){
    return await getTruck(id)
}