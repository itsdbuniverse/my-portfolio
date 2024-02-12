import React, { useRef } from 'react'
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";


const items = [
    {
        id:1,
        title:"Netflix app",
        img:"/register.png",
        desc:"Experience the Netflix Clone, a fully functional app crafted with MongoDB, Express.js, React.js, and Node.js. Enjoy a seamless interface, personalized recommendations, and a vast library of movies and TV shows. Dive into the world of entertainment with this responsive and user-friendly streaming application."
    },
    {
        id:2,
        title:"D-Web",
        img:"/dweb.png",
        desc:"PROVIDING REAL TIME ENVIRONMENT USING DWEB is a service designed to provide an environment to users for their different purposes. It is a website where anybody can launch their own environment or service. USING DWEB and allow multiple services to be launched simultaneously. It is a real time environment provider to any user or rather developer for their use" 
        
    },
    {
        id:3,
        title:"Weather app",
        img:"/weather.png",
        desc:"WeatherNow is a fully functional React app that seamlessly integrates with the OpenWeather API. Stay updated on the latest weather conditions with this user-friendly application. Experience real-time weather data, accurate forecasts, and an intuitive interface for a hassle-free weather-checking experience. With WeatherNow, you're always in the know about the current weather and upcoming forecasts."
    },
    {
        id:4,
        title:"Quickbite Resturant app",
        img:"/food.png",
        desc:"QuickBite, a fully functional React app, lets users place real-time orders with ease. Enjoy seamless login, browse the menu, and pay securely with integrated payment gateways. Savor the convenience of QuickBite for a fast and delightful dining experience."
    },
]

const Single = ({ item }) => {
    const ref = useRef();
  
    const controls = useSpring(0, { stiffness: 100, damping: 30 });
  
    return (
      <section ref={ref}>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer">
          <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ x: controls }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {/* <button>See Demo</button> */}
          </motion.div>
          </div>
        </div>
      </section>
    );
  };
  
  const Portfolio = () => {
    const ref = useRef();
  
    // Use useSpring directly for the overall scrollYprogress.
    const {scrollYProgress} = useScroll({
      target: ref,
      offset: ["end end", "start start"],
    });
  
    // Apply the scaleX transformation directly to the progressBar.
    const scaleX = useSpring(scrollYProgress,{
      stiffness: 100,
      damping: 30,
    } );
  
    return (
      <div className="portfolio" ref={ref}>
        <div className="progress">
          <h1>My Projects</h1>
          <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map(item => (
          <Single item={item} key={item.id} />
        ))}
      </div>
    );
  };
  
  export default Portfolio;