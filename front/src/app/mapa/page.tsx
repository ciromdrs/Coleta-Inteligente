"use client"

import dynamic from "next/dynamic"
import { useMemo } from "react"

export default function Page(){
    const Map = useMemo(() => dynamic(
        () => import("@/components/Map"),
        {
            loading: () => <p>O mapa está carregando</p>,
            ssr: false
        }
    ), [])
    return(
        <div className="p-12 w-full h-screen">
            <div className="w-full h-full flex flex-row flex-wrap bg-background2 p-4 rounded-xl gap-5 ">
                <Map position={[-6.455410, -37.094683]} zoom={15}/>
            </div>
        </div>
    )
}