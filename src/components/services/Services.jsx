import "./Services.scss";
import {motion,useInView } from "framer-motion";
import { useRef } from "react";

const variants = {
    initial : {
        x : -500,
        y:100,
        opacity : 0
    },
    animate: {
        x : 0,
        opacity : 1,
        y : 0,
        transition : {
            duration : 1,
            staggerChildren: 0.1
        }
    }
};

const Services = () => {
    const ref = useRef();
    const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div className="services" variants = {variants} initial = "initial" whileInView="animate">
        <motion.div className="textContainer" variants = {variants}>
            <p>
                I focus on helping your brand grow <br />
                and move forward
            </p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants = {variants} >
            <div className="title">
                <img src="people.webp" alt="" />
                <h1><b>Unique</b> Solutions</h1>
            </div>
            <div className="title">
                <h1><b>For Your</b> Business.</h1>
                <button>WHAT I DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants = {variants}>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Learn</h2>
                <p>
                    I begin by immersing myself in learning the fundamentals and advancements in mechanical design and digital manufacturing. Through structured training on industry tools like CATIA, ENOVIA, and DELMIA on the 3DEXPERIENCE platform, I focus on understanding design principles, product lifecycle management, and simulation. This learning phase is essential for building a solid foundation in digital mechanical engineering practices.
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Build</h2>
                <p>
                    With the concepts and tools in hand, I transition into building virtual models and mechanical systems. Using platforms like CATIA for 3D modeling and DELMIA for process planning, I develop parts, assemblies, and complete workflows. This stage transforms my theoretical knowledge into practical digital prototypes that mirror real-world mechanical systems.
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Test</h2>
                <p>
                    Next, I focus on validating the performance and functionality of my designs. Using simulation tools like SIMULIA, I analyze stress, strain, thermal behavior, and structural integrity under various conditions. This ensures that my virtual models meet safety, performance, and manufacturability standards before reaching the production floor.
                </p>
                
            </motion.div>
            <motion.div className="box" whileHover={{background : "lightgray", color : "black" }}>
                <h2>Improve</h2>
                <p>
                    Finally, I refine and optimize the design based on simulation results and feedback from mentors or team reviews. Whether it’s redesigning a component for manufacturability or enhancing performance, this continuous improvement step helps ensure the final design is efficient, sustainable, and production-ready. This cycle of iteration is what shapes my growth as a mechanical engineer ready to take on industry challenges.
                </p>
                
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services