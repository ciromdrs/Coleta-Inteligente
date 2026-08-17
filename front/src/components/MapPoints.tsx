"use client"

import { MapContainer, Marker, TileLayer, Tooltip, Popup, Polyline, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import { useEffect, useState } from "react"

function HandleClick({onMapClick}: { onMapClick: (lat: number, lng: number) => void}) {
      useMapEvents({
        click(e) {
          onMapClick(e.latlng.lat, e.latlng.lng)
        }
      })
      return null;
    }

export default function MapPoints(props: any) {
  const [points, setPoints] = useState<[number, number][]>([])
  const { position, zoom } = props

  function handleMapClick(lat: number, lng: number) {
    setPoints((prev) => [...prev, [lat, lng]])
    console.log(points)
  }

  function undoLastPoint() {
    setPoints((prev) => prev.slice(0, -1))
  }

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if((e.ctrlKey || e.metaKey) && e.key == 'z') {
        e.preventDefault()
        undoLastPoint()
      }
    }
    
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  return <MapContainer className="w-full h-full" center={position} zoom={zoom} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[-6.439378, -37.084235]}>
      <Popup>
        Placa: 12345A <br /> Motorista: Juninho
      </Popup>
    </Marker>
    <Marker position={[-6.453619, -37.094212]}>
      <Popup>
        Placa: 12345B <br /> Motorista: Cleiton
      </Popup>
    </Marker>
    <HandleClick onMapClick={handleMapClick}/>

    {points.length > 1 && (<Polyline pathOptions={{color: "red"}} positions={points}/> )}
  </MapContainer>
}
