import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  return (
    <MapContainer center={[24.7136, 46.6753]} zoom={13} style={{ height: '250px', width: '100%' , borderRadius : '12px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[24.7136, 46.6753]}>
        <Popup>
          Braunschweiger Str. 14, 12055 Riyadh, Saudi Arabia
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
