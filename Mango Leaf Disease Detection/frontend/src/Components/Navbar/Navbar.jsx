import React, { useRef, useEffect, useContext } from 'react';
import "./navbar.css";
import { Link, NavLink } from 'react-router-dom';
import { motion } from "framer-motion"
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';
import useLocalStorage from 'use-local-storage';
import logo from "../../images/fav.png"
import { drawerContext } from '../Context/Drawer';
import Weather from '../weather/weather';

function Navbar({ change }) {

    const { leftmenu, updateLeftmenu } = React.useContext(drawerContext);

    const [mode, setMode] = useLocalStorage("theme", true);
    const climatedata = useContext(drawerContext);
    const { weatherData } = climatedata;



    const openDrawer = () => {
        updateLeftmenu(!leftmenu);
    }

    const changeMode = () => {
        setMode(!mode);
        change(!mode);
    }

    const NavbarVariants = {
        hidden: {
            x: -10,
        },
        visible: {
            x: 0,
            transition: { duration: 1, type: "spring" },
        },
        exit: {
            x: -10,
            transition: { ease: "linear" }
        }
    }

    const refs = useRef(null);

    const handleOutsideClick = (e) => {
        const element = refs.current;
        if (element !== e.target) {
            updateLeftmenu(false);
        }
        else {
            updateLeftmenu(true);
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true)
    }, []);


    const switchLanguage = () => {
        // Implement language change logic here
    }


    return (
        <div className={`navbar ${mode && "dark"}`}>
            <div className='logo-part'>
                <div className={`menu-icon`} >
                    <MenuIcon className='icon' onClick={openDrawer} />
                </div>
                <Link to="/" className='logo-link'>
                    <div className='logo'>
                        <img src={logo} alt='Logo Here' />
                        <p>Agri-Cure</p>
                    </div>
                </Link>
                <div>
                    {/* Button with Weather component */}
                    <NavLink to="/weather" className='weather-button'>
                        <WeatherButton weatherData={weatherData} />
                    </NavLink>
                </div>
                
            </div>
            <div className="language-icon" onClick={switchLanguage}>
                <LanguageIcon />
            </div>
            <div onClick={changeMode} className='menu-icon'>
                {
                    !mode ? <LightModeOutlinedIcon className='icon' /> : <DarkModeOutlinedIcon className='icon' />
                }
            </div>
            {
                leftmenu &&
                <motion.div className='drawer'
                    variants={NavbarVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    ref={refs}
                >
                    <div onClick={openDrawer} className='menu-icon'><CloseIcon className='icon' /></div>
                    <NavLink to="/" end className="linkss">
                        <div className='drawer-links'>
                            <div className='hovering-box'>
                                <div className='hovering'>
                                    <HomeOutlinedIcon className='icon' />
                                    <HomeIcon className='icon-2' />
                                </div>
                            </div>
                            Home
                        </div>
                    </NavLink>

                    <NavLink to="/upload-image" end className="linkss">
                        <div className='drawer-links'>
                            <div className='hovering-box'>
                                <div className='hovering'>
                                    <ArrowCircleRightOutlinedIcon className='icon' />
                                    <ArrowCircleRightIcon className='icon-2' />
                                </div>
                            </div>
                            Get Started
                        </div>
                    </NavLink>

                    <NavLink to="/contact" end className="linkss">
                        <div className='drawer-links'>
                            <div className='hovering-box'>
                                <div className='hovering'>
                                    <ContactPageOutlinedIcon className='icon' />
                                    <ContactPageIcon className='icon-2' />
                                </div>
                            </div>
                            Contact
                        </div>
                    </NavLink>
                </motion.div>
            }
        </div>
    )
}

const WeatherButton = ({ weatherData }) => {
    console.log("weatherdata in weather button", weatherData)
    return (
        <div className="weatherButtonContainer">
            
            <div className="weatherbuttontext">
            Today's weather
            </div>
            <div className="weather-icon">
                <img src={weatherData.current.condition.icon} alt={weatherData.current.condition.text} />
            </div>
        </div>
        // <button className="weather-button">
   
        // </button>
    );
}

const WeatherIcon = () => {
    // You can customize the weather icon as per your requirement
    return <div className="weather-icon">☀️</div>;
}

export default Navbar;
