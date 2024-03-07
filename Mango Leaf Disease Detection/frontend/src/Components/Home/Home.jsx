import "./home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import stat1 from "../../images/stat1.png";
import stat2 from "../../images/stat2.jpg";
import stat3 from "../../images/stat3.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {Trans, useTranslation} from "react-i18next";
import { Typewriter } from 'react-simple-typewriter'

function Home() {


  const {t} = useTranslation();
  const {line1, line2} = t("description", {channel: "chanel1"});



  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const containerVariants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.5, duration: 0.3, type: "spring", stiffness: 70 },
      // transition={{delay:0.7 , duration:1 , type:"spring"}}
    },
    exit: {
      y: "0vh",
      transition: { ease: "easeInOut" },
    },
  };

  return (
    <motion.div
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="home-info">
        <h1 id="simple_arc" className="textomimage">
           <p>{t("greeting")}</p>
          
        </h1>
        <p className="textomimage2">
        <p></p>
        <p><Typewriter words={[`${t("desc")}`]} typeSpeed={70}  delaySpeed={1000}/></p>
        </p>
        <Link to="/upload-image" className="btn-link">
        <p>{t("start button")}</p>
        </Link>
      </div>

      <div className="body-info">
        <div className="body-info-img" data-aos="zoom-in">
          <img
            src={stat1}
            alt="undraw-healthy-lifestyle-6tyl"
            border="0"
            className="home-image"
          />
        </div>
        <div className="body-info-text">
          {/* <h1>Impact on Economy ...</h1> */}
          <h1>{t("description.line1.title")}</h1>
          
          <p>
          {/* {t("description.line1.descr")} */}
          </p>
        </div>
      </div>

      <div className="body-info odd">
        <div className="body-info-img" data-aos="zoom-in">
          <img
            src={stat2}
            alt="undraw-healthy-lifestyle-6tyl"
            border="0"
            className="home-image"
          />
        </div>
        <div className="body-info-text">
        <h1>{t("description.line2.title")}</h1>
          <p>
          {t("description.line2.descr")}
          </p>
        </div>
      </div>

      <div className="body-info">
        <div className="body-info-img" data-aos="zoom-in">
          <img
            src={stat3}
            alt="undraw-healthy-lifestyle-6tyl"
            border="0"
            className="home-image"
          />
        </div>
        <div className="body-info-text">
          <h1>{t("description.line3.title")}</h1>
          <p>
          {t("description.line3.descr")}
           </p>
        </div>
      </div>

      {/* <div className="body-info odd">
        <div className="body-info-img" data-aos="zoom-in">
          <img
            src={panda}
            alt="undraw-healthy-lifestyle-6tyl"
            border="0"
            className="home-image"
          />
        </div>
        <div className="body-info-text">
          <h1>Agri-Cure</h1>
          <p>
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </div>
      </div> */}
    </motion.div>
  );
}

export default Home;
