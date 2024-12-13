import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import { useMap } from "react-leaflet/hooks";

export default function Map() {
  return (
    <MapContainer
      center={[43.30286, 5.39679]}
      zoom={13}
      scrollWheelZoom={false}
      className="h-100"
    >
      <TileLayer
        //   attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[43.30286, 5.39679]}>
        <Popup>128 Bd de la Libération, 13004 Marseille</Popup>
      </Marker>
    </MapContainer>
  );
}
