'use client'

import { addTruck } from "@/lib/db"

export default function Page() {

    async function handleSubmit(formData: FormData) {
        const res = await addTruck(formData.get('plate')!)
    }

    return (
        <div className="p-12 w-full h-screen">
            <form action={handleSubmit} className="flex flex-col bg-background2 flex-wrap h-full text-3xl rounded-xl p-4 justify-between">
                <div className="flex flex-col gap-6">
                <input type="text" name="plate" id="plate" placeholder="Placa..." className="p-3 bg-background3 rounded-full" required/>
                </div>
                <div className="opacity-70 flex flex-col items-end">
                    <button type="submit" className="flex items-center justify-center rounded-full hover:cursor-pointer text-5xl bg-green-600 p-8 w-9 h-9 ">✓</button>
                </div>
            </form>
        </div>
    )
}