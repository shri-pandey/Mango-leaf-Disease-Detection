import React, { useEffect } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const drawerContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const DrawerProvider = ({ children }) => {
    const [leftmenu, setleftmenu] = React.useState(false);
    const [weatherData, setWeatherData] = React.useState(null);

    const updateLeftmenu = (value) => {
        setleftmenu(value);
    };
    const setweatherdata = (value) => {
      setWeatherData(value);
      console.log("weather value instant",weatherData)
    };


    useEffect(() => {
      console.log("Weather data now", weatherData);
  }, [weatherData]);


    return (
      <drawerContext.Provider value={{  leftmenu ,setweatherdata,weatherData, updateLeftmenu }}>
        {children}
      </drawerContext.Provider>
    );
};