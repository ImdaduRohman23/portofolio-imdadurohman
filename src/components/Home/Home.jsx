import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';
import { motion } from 'framer-motion';

const homeVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 2
        }
    }
}

const fotoVariant = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2.5
        }
    }
}

const Home = () => {
    return (
        <motion.section className='home section' id='home'
            variants={homeVariant}
            initial="hidden"
            animate="visible"
        >
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <motion.div variants={fotoVariant} className="home__img"></motion.div>

                    <Data />

                </div>
                <Scroll />

            </div>
        </motion.section>
    )
}

export default Home
