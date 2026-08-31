import { Polyline } from "react-leaflet"

export default function Caminhao({ points, color }: any) {
    const currentPos = []
    return <>
        <Polyline positions={points} pathOptions={{color: color}} />
    </>
}