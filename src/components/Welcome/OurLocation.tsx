import { MapPinIcon } from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationBadgeBottom from "./LocationBadgeBottom";
import LocationBadgeTop from "./LocationBadgeTop";

export default function OurLocation() {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-10 p-10 bg-gray-500 border-t border-gray-200 md:flex-row">
      <div className="relative z-[1] bg-gradient-to-b from-gray-100 to-white rounded-md shadow-xs h-80 w-96 flex items-center justify-center px-10">
        <LocationBadgeTop />
        <LocationBadgeBottom />
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center justify-center w-16 h-16 text-blue-900 bg-blue-100 rounded-full">
            <MapPinIcon className="w-1/3 h-1/3" />
          </div>
          <span className="font-medium font-inter text-muted-foreground">
            RT.5/RW.2, Gambir, Kecamatan Gambir, Kota Jakarta Pusat, Daerah
            Khusus Ibukota Jakarta 10110
          </span>
        </div>
      </div>

      <MapContainer
        center={[-6.1731877, 106.8262221]}
        zoom={16}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.de/{z}/{x}/{y}.png"
        />
        <Marker position={[-6.1731877, 106.8262221]}>
          <Popup>
            Our physical store location:
            <br />
            Gang JIUN
            <br />
            Jagakarsa
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
}
