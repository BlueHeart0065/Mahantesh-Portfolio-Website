import { useRef } from "react";
import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useState } from "react";
import PopUp from "../pop-up/PopUp";


const items = [
    {
        id : 1,
        title : "Design and Development of Economy Class Seat",
        img : "arlp5.png",
        desc : "This project, titled Design and Development of Economy Class Seat Using 3DEXPERIENCE CAD Modeling, presents a comprehensive, model-based systems engineering (MBSE) approach to developing an ergonomically optimized and structurally efficient aircraft seat.",
        src : "p5.pdf"
    },
    {
        id : 2,
        title : "Dassualt Systemes Internship Report",
        img : "arlp6.png",
        desc : "This internship at Dassault Systèmes Global Services provided comprehensive exposure to industry-leading tools like CATIA, ENOVIA, DELMIA, and SIMULIA within the 3DEXPERIENCE platform, enabling hands-on experience in digital product design, simulation, lifecycle management, and collaborative engineering aligned with Industry 4.0 practices.",
        src : "p6.pdf"
    },
    {
        id : 3,
        title : "Design and Analysis of Motorcycle Lift",
        img : "arlp2.png",
        desc : "This research focuses on the mechanical and structural aspects of motorcycle lifts, investigating factors such as load capacity, stability, cost effectiveness and ease of use",
        src : "p2.pdf"
    },
    {
        id : 4,
        title : "Research Paper",
        img : "arlp4.png",
        desc : "The paper represents the design, analysis and optimization carried out on a motorcycle and material lift system that focuses on safety, efficiency, cost effectiveness.",
        src : "p4.pdf"
    },
    {
        id : 5,
        title : "Customized Rangoli Drawing Machine",
        img : "arlp3.png",
        desc : "The Customized Rangoli Drawing Machine is a cost-effective, portable, and user-friendly CNC-based device designed to automate the creation of intricate and precise rangoli patterns using eco-friendly materials, enhancing traditional artistry with modern engineering.",
        src : "p3.pdf"

    },
    {
        id : 6,
        title : "Reverse Engineering On Pulsar 150 Bike",
        img : "arlp1.png",
        desc : "Recreation or Improvisation upon the original item, often with the aim of enhancing its performance, compatibility, or efficiency Reverse engineering is the process of analysing and understanding the design and functionality of a product or component by examining its structure, behaviour, and operation.",
        src : "p1.pdf"
    }
]


const Single = ({item}) => {
    const handleViewReport = () => {
        window.open(item.src, "_blank");
    };
    const ref = useRef()
    const {scrollYProgress} = useScroll({target : ref})
    const y = useTransform(scrollYProgress, [0,1], [-300, 300])

    

    // const [isModalOpen, setModalOpen] = useState(false);
    // const handleLinkClick = (e) => {
    //     e.preventDefault();
    //     setModalOpen(true);
    // };
    // const handleCloseModal = () => {
    //     setModalOpen(false);
    // };
    // const handleConfirmDownload = () => {
    //     setModalOpen(false);
    //     window.location.href = 'Mahantesh Resume.pdf';
    // };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer">
                        <img src = {item.img} alt=""  ref={ref}/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleViewReport} ><a href="p1.pdf">Get Report</a></button>
                        

                    </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    
    const ref = useRef()
    const {scrollYProgress} = useScroll({target : ref, offset : ["end end", "start start"]})

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping : 30
    })
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style= {{scaleX: scaleX}}>
                
            </motion.div>
        </div>
        {
            items.map(item => (<Single item = {item} key = {item.id}/>))
        }
    </div>
  )
}

export default Portfolio