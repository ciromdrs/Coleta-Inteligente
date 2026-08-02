import { MapContainer, Marker, TileLayer, Tooltip, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map(props: any) {
  const { position, zoom } = props

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
  </MapContainer>
}
