import React from 'react'
import { animate, motion } from "framer-motion"
import "./services.scss"

const variants = {
    initial:{
        x:-500,
        y: 100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity: 1,
        y:0,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
}

function Services() {
    
    return ( //whileInView="animate"
        <motion.div className="services" variants={variants} initial="initial" animate="animate" > 
            <motion.div className="textContainer" variants={variants}>
                <p>I focus on helping your brand grow<br />
                    and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer"variants={variants}>
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1>
                </div>
                <div className="title">
                    <h1>
                        <b>For Your</b> Business.
                    </h1>
                    {/* <button>WHAT WE DO?</button> */}
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}> 
                    <h2>Skills</h2> 
                    
                    <span>
                        <ul>
                        <li><b>Programming</b> : Java, Python, Data Structures & Algorithm</li>
                        <li><b>Frontend</b> : HTML, CSS, Javascript, React.js,Bootstrap,Tailwind</li>
                        <li><b>Backend</b> : Node.js, Express.js, MongoDB</li>
                        </ul>
                    </span>
                    
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Experience</h2>
                    <p>Mern Developer
                        at Codemeg Soft Solution
                    </p>
                    <br></br>
                    <span>
                        <ul>
                        <li>Successfully completed a rigorous 9-months MERN-Stack web developer training and internship program</li>
                        <li>Crafted engaging front-end experiences using HTML, CSS, JavaScript, and React.</li>
                        <li> Developed expertise in MERN stack-based backends</li>
                        <li>Applied knowledge in real-world projects</li>
                        </ul>
                    </span>
                    
                    
                    {/* <button>Go</button> */}
                </motion.div>
                <motion.div className="box" whileHover={{background: "lightgray", color:"black"}}>
                    <h2>Education</h2>
                    <span>
                        <ul>
                        <li><b>Full Stack Development</b><br></br>
                            Sheriyans Coding School
                        </li>
                        <li><b>B.Tech-CSE (2022)</b><br></br>
                            Oriental Institute of Science and Technology 
                        </li>
                        
                        </ul>
                    </span>
                    {/* <button>Go</button> */}
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services