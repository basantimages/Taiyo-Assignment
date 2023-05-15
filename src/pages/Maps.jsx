import BoxUI from '../components/UI/BoxUI';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import CoronaChart from '../components/UI/CoronaChart';
import { useSelector } from 'react-redux';

const Maps = () => {
  // !Getting map data
  const mapData = useSelector((state) => state.coronaData.mapData);

  //! Customizing the Icon for Tile
  const customIcon = L.icon({
    iconUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjh56KMq_-Edf_aw4F3BpBbpqbHryyfn_xC1_Glp_&s',
    iconSize: [10, 15], // Setting the desired icon size here
  });

  return (
    <BoxUI>
      {/* Showing the corona cases line chart per year */}
      <CoronaChart />

      {/* Showing the corona cases map */}
      <MapContainer center={[0, 0]} zoom={2} style={{ height: '80vh', width: '100%' }}>
        <TileLayer url='https://{s}.tile.osm.org/{z}/{x}/{y}.png' />
        {mapData.map((country) => (
          <Marker
            key={Math.random()}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={customIcon}
          >
            {/* Setting the popUp for each Mark */}
            <Popup>
              <div>
                <h2>{country.country}</h2>
                <p>Total Cases: {country.cases}</p>
                <p>Total Recovered: {country.recovered}</p>
                <p>Total Deaths: {country.deaths}</p>
                <p>Total Active: {country.active}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </BoxUI>
  );
};

export default Maps;
