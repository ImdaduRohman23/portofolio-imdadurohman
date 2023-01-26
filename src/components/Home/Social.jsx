import React from 'react';
import { motion } from 'framer-motion';

const socialVariant = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2
        }
    }
}

const Social = () => {
    return (
        <motion.div variants={socialVariant}>
            <div className="home__social">
                <a href="https://www.linkedin.com/in/imdadu-rohman-462739242/" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-linkedin"></i>                
                </a>

                <a href="https://github.com/ImdaduRohman23" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-github"></i>
                </a>

                <a href="https://github.com/ImdaduRohman23" className="home__social-icon" target="_blank" rel="noreferrer">
                    <i className="uil uil-gitlab"></i>
                </a>

            </div>
        </motion.div>
    )
}

export default Social
