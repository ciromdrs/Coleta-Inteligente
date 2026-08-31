'use client'

import { updateTruck } from "@/lib/db"
import { useSearchParams } from "next/navigation"
import { ChangeEvent, useEffect, useState } from "react"
import getUpdateTruck from "./action"

export default function Page() {
    const [truck, setTruck] = useState<{id: number, plate: string}[]>()
    const [plate, setPlate] = useState("")
    const searchParams = useSearchParams()
    
    const id = parseInt(searchParams.get('id')!)

    useEffect(() => {
        getUpdateTruck(id).then(setTruck)
    }, [id])

    useEffect(() => {
        if (truck) {
            setPlate(truck![0].plate)
        }
    }, [truck])

    async function handleSubmit(formData: FormData) {
        await updateTruck(id, formData.get('plate')!.toString())
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setPlate(e.target.value)
    }

    if (truck) {
        return (
            <div className="p-12 w-full h-screen">
                <form action={handleSubmit} className="flex flex-col bg-background2 flex-wrap h-full text-3xl rounded-xl p-4 justify-between">
                    <div className="flex flex-col gap-6">
                    <input type="text" name="plate" id="plate" value={plate} onChange={handleChange} placeholder="Placa..." className="p-3 bg-background3 rounded-full" required/>
                    </div>
                    <div className="opacity-70 flex flex-col items-end">
                        <button type="submit" className="flex items-center justify-center rounded-full hover:cursor-pointer text-5xl bg-green-600 p-8 w-9 h-9 ">✓</button>
                    </div>
                </form>
            </div>
        )
    }
}