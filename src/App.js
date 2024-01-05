import { useJsApiLoader } from '@react-google-maps/api';
import './App.css';
import { mapOptions } from './pages/MapConfigration';
import Profile from './pages/Profile';
import Helpline from './pages/Helpline';
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Navbar from './pages/Navbar';
import Login1 from './pages/Login1';
import Signup from './pages/Signup';
import Alert from './pages/Alert';  
import About from './pages/About'; 
import Map from './pages/Map';
// import { GoogleMap } from '@react-google-maps/api';

// import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";

function App() {

  const { isLoaded } = useJsApiLoader({
    id: mapOptions.googleMapApiKey,
    googleMapsApiKey: mapOptions.googleMapApiKey,
  });

  return (
    <BrowserRouter>
    <Routes>
      
      <Route exact path="/" element={<About />}   />
      <Route exact path="/helpline" element={<Helpline />}   />
      <Route exact path= "/map" element={<Map isLoaded={isLoaded}/>}  />
      <Route exact path= "/alert" element={<Alert />}  />
      <Route exact path= "/profile" element={<Profile />}  />
      <Route exact path= "/login" element={<Login1 />}  />
      <Route exact path= "/signup" element={<Signup/>}  />
     </Routes>
    
     </BrowserRouter> 
  );
}

export default App;
