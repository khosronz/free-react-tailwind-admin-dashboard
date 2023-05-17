import { Circle, CircleMarker, FeatureGroup, LayerGroup, LayersControl, Marker, Polygon, Polyline, Popup, Rectangle, SVGOverlay } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';



const MapTwo = () => {
  
  const center = [51.505, -0.09]
  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ]

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
      نقشه
      </h4>
      <div id="mapTwo">
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="w-full h-full">
          <TileLayer className="w-full h-full"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
            <LayersControl position="topright">
                  <LayersControl.Overlay name="Marker with popup">
                    <Marker position={center}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay checked name="Layer group with circles">
                    <LayerGroup>
                      <Circle
                        center={center}
                        pathOptions={{ fillColor: 'blue' }}
                        radius={200}
                      />
                      <Circle
                        center={center}
                        pathOptions={{ fillColor: 'red' }}
                        radius={100}
                        stroke={false}
                      />
                      <LayerGroup>
                        <Circle
                          center={[51.51, -0.08]}
                          pathOptions={{ color: 'green', fillColor: 'green' }}
                          radius={100}
                        />
                      </LayerGroup>
                    </LayerGroup>
                  </LayersControl.Overlay>
                  <LayersControl.Overlay name="Feature group">
                    <FeatureGroup pathOptions={{ color: 'purple' }}>
                      <Popup>Popup in FeatureGroup</Popup>
                      <Circle center={[51.51, -0.06]} radius={200} />
                      <Rectangle bounds={rectangle} />
                    </FeatureGroup>
                  </LayersControl.Overlay>
                </LayersControl>
        </MapContainer>
      </div>
      
    </div>
  );
  
};

export default MapTwo;
