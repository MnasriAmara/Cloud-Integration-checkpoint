
import './App.css';
import Map from './components/Map';

function App() {
  const location = {
    address:
      "GOMYCODE Gafsa, Immeuble Anas rue Miloud place Pasteur, Gafsa 2151",
      lat: 34.419838,
      lng: 8.791229
  };
  return <Map location={location} zoomLevel={15} />;
}
  
export default App;
