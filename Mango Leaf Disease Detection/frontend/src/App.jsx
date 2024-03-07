import React, { useContext, useEffect, useState } from 'react';
import './App.css'
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body/Body';
import Home from './Components/Home/Home';
import { Route , Routes , useLocation} from 'react-router-dom';
import ScrolTop from './Components/ScrollTop/ScrolTop';
import { AnimatePresence } from 'framer-motion';
import Contact from './Components/Contact/Contact';
import Footer from "./Components/footer/Footer"
import useLocalStorage from 'use-local-storage';
import { drawerContext } from './Components/Context/Drawer';
import LocationPermission from './Components/LocationPicker/LocationPermission';
import Weather from './Components/weather/weather';
// import { useState } from 'react';

function App() {

  const { leftmenu } = React.useContext(drawerContext);
  const location = useLocation();
  const [theme , setTheme] = useLocalStorage("dark");
  const [permission, setPermission] = useState(null);
   // weather 
   const climatedata = useContext(drawerContext);
   const { setweatherdata, weatherData } = climatedata;

  const change = (bool) =>{
    if(bool === true){
    setTheme("light");
    }
    else{
      setTheme("dark");
    }
  }


   // Handler function to update permission state
   const handlePermissionChange = (newPermission) => {
    setPermission(newPermission);
  };

  useEffect(() => {
    // Your logic here to re-render the page whenever permission changes
    console.log("Permission changed:", permission);
  }, [permission]);

  return (
    // <BrowserRouter>
    // eslint-disable-next-line react/no-unknown-property || organised component logically and grouped related files together
  <main theme={theme} >
      <AnimatePresence>
        <Navbar change={change} />
        {/* Render LocationPermission if permission is not granted */}
        {permission === null  && <LocationPermission onPermissionChange={handlePermissionChange} />}
        {/* Render other components only when permission is granted */}
        {(permission === 'granted' || permission === 'denied') && (
          <>
          
            <div className={leftmenu && "light-bg"}>
              <Routes location={location} key={location.key}>
                <Route path='/' element={<Home/>} />
                <Route path='weather' element={<Weather weatherData={weatherData}/>} />
                <Route path='/upload-image' element={<Body />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
              
            </div>
           
          </>
        )}
        <Footer />
      </AnimatePresence>
    </main>
    // </BrowserRouter>
  )
}

export default App;

// aetghet
