import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';
import "./Map.css";

const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],

  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

const Map: React.FC = () => {
  const mapRef = useRef<L.Map | null>(null);
  const [geoJsonData, setGeoJsonData] = useState<any>(null);

  const navigate = useNavigate();
  const handleNav1Click = () => {
    navigate('/VideoCapture');
  };
  const handleNav2Click = () => {
    navigate('/Map');
  };
  const handleNav3Click = () => {
    navigate('/Dashboard');
  };

  useEffect(() => {
    // Charger les données GeoJSON dynamiquement
    fetch('/corbeilles-tours-metropole-val-de-loire.geojson')
      .then(response => response.json())
      .then(data => {
        setGeoJsonData(data);
        if (mapRef.current) {
          const map = mapRef.current;
          const geoJsonLayer = L.geoJSON(data, {
            onEachFeature: (feature, layer) => {
              if (feature.geometry.type === 'Point') {
                const marker = L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], {
                  icon: defaultIcon
                });
                marker.bindPopup(feature.properties.name);
                marker.addTo(map);
              }
            }
          });
          map.fitBounds(geoJsonLayer.getBounds());
        }
      })
      .catch(error => console.error('Error loading GeoJSON:', error));
  }, []);

  // Fonction handleMapReady sans paramètre
  const handleMapReady = () => {
    if (mapRef.current) {
      console.log('Map is ready:', mapRef.current);
    }
  };

  return (
    <MapContainer
      center={[47.394144, 0.68484]} // Coordonnées d'exemple pour Tours, France
      zoom={13}
      style={{ height: "81vh", width: "94%", left: "3%", marginTop: "20%" }}
      whenReady={handleMapReady}
      ref={mapRef} // Assignation de la référence de la carte
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoJsonData && <GeoJSON data={geoJsonData} />}
      <div className="dashboard-nav">
        <img
          alt="Rectangle21943"
          src="/external/rectangle21943-s4nj.svg"
          className="dashboard-rectangle2"
        />
        <div className="dashboard-frame15">
          <button onClick={handleNav3Click} className='dashboard-nav3-button'>
            <img
              alt="Nav1998"
              src="/external/nav1998-qapr.svg"
              className="dashboard-nav1"
            />
          </button>
          <button onClick={handleNav2Click} className='dashboard-nav2-button'>
            <img
              alt="Nav2018"
              src="/external/mapvert.png"
              className="dashboard-nav2"
            />
          </button>
          <button onClick={handleNav1Click} className="dashboard-nav1-button">
            <img
              alt="Nav2018"
              src="/external/nav2018-karx.svg"
              className="dashboard-nav3"
            />
          </button>
          <img
            alt="Nav2018"
            src="/external/nav2018-315c.svg"
            className="dashboard-nav4"
          />
          <div className="dashboard-nav5">
            <img
              alt="BoucheI2018"
              src="/external/bouchei2018-fmia.svg"
              className="dashboard-bouche1"
            />
            <img
              alt="VisageI2018"
              src="/external/visagei2018-h3lr.svg"
              className="dashboard-visage1"
            />
            <img
              alt="YeuxI2018"
              src="/external/yeuxi2018-60ou.svg"
              className="dashboard-yeux1"
            />
          </div>
        </div>
      </div>
    </MapContainer>
  );
};

export default Map;
