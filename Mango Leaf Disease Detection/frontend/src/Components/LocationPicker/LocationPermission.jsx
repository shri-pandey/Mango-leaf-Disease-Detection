import React, { useContext, useState } from 'react';
import './LocationPermission.css'; // Import CSS file for styling
import { drawerContext } from '../Context/Drawer';
import {useTranslation} from "react-i18next";

const LocationPermission = ({ onPermissionChange }) => {

    const {i18n} = useTranslation();
  const [permission, setPermission] = useState(null);
  const [state, setState] =useState();
 


  const askPermission = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setPermission('granted');
          getLocationInfo(position.coords.latitude, position.coords.longitude)
          onPermissionChange('granted');
          // Do something with the user's location data if needed
          console.log('Latitude: position of mine', position.coords.latitude);
          console.log('Longitude:  position of mine', position.coords.longitude);
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setPermission('denied');
            onPermissionChange('denied');
          }
        }
      );
    } else {
      setPermission('unsupported');
    }
  };

  const denyPermission = () => {
    setPermission('denied');
    onPermissionChange('denied');
    changeLanguage('en');
  };
//change language
const changeLanguage = (lng) => {
    console.log('changing lanf', lng)
    i18n.changeLanguage(lng);
  };

//   get state
function getLocationInfo(latitude, longitude) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=4bb450ef4b854ba194ec9bcca89f0d4e`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          
          setState(data.results[0].components.state_code.toLowerCase())
          changeLanguage(data.results[0].components.state_code.toLowerCase())
          console.log("new state", state);
        //   setfunc(data.results[0].components.state_code)
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }


  return (
    <div className="LocationPermission-modal">
      <div className="LocationPermission-modal-content">
        {permission === null && (
          <div>
            <p>This page wants to access your location.</p>
            <div>
              <button onClick={askPermission}>Allow</button>
              <button onClick={denyPermission}>Deny</button>
            </div>
          </div>
        )}
        {permission === 'granted' && <p>Location access granted!</p>}
        {permission === 'denied' && <p>Location access denied!</p>}
        {permission === 'unsupported' && <p>Geolocation is not supported by your browser.</p>}
      </div>
    </div>
  );
};

export default LocationPermission;



// useEffect(() => {

// }, [permission]);
