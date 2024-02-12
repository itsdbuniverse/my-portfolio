import Sidebar from "../Sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

function Navbar() {
  return (
    <div className="navbar">
        {/*Sidebar*/}
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity:0, scale:0.5}}
            animate={{opacity:1, scale:1}}
            transition={{duration:0.5}}
            >Hello, I am</motion.span>
            <div className="social">
            <a href="https://github.com/itsdbuniverse"><img src="/github.png" alt=""/></a>
                <a href="https://www.linkedin.com/in/devendra-barkhane-484325213/"><img src="/linkedin.png" alt=""/></a>
                <a href="https://www.instagram.com/itsdbuniverse/"><img src="/instagram.png" alt=""/></a>
                
                {/* <a href="#"><img src="/dribbble.png" alt=""/></a> */}
            </div>
        </div>
    </div>
  )
}

export default Navbar