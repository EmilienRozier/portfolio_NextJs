"use client"

import React, { useEffect, useState } from 'react';
import { useAnimation, motion } from 'framer-motion';
import styles from './navbar.module.css';

const Navbar = ({ menuState, setMenuState }) => {

    const controls = useAnimation();

    useEffect(() => {
        if (menuState === 'open') {
            controls.start({ y: 0 });
        } else {
            controls.start({ y: '-100%' });
        }

    }, [menuState, controls]);

    useEffect(() => {
        const navElements = document.querySelectorAll(`#${styles.menu_nav} li a`);
        navElements.forEach(e => {
            e.onclick = () => setMenuState('close');
            console.log(e.href)
        });
    }, [setMenuState]);

    return (
        <>
            <motion.div
                className={`${styles.menu} ${menuState === 'close' ? styles.close : ''}`}
                id={styles.menu}
                animate={controls}
                transition={{ duration: 0.3 }} // Adjust the duration as needed
            >
                <div className={styles.menu_content}>
                    <div>
                        <div id={styles.close_burger} onClick={() => setMenuState("close")}>
                            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y="35.3553" width="50" height="3" rx="1.5" transform="rotate(-45 0 35.3553)"
                                    fill="white" />
                                <rect x="2.85962" y="0.238327" width="50" height="3" rx="1.5"
                                    transform="rotate(45 2.85962 0.238327)" fill="white" />
                            </svg>
                        </div>
                    </div>
                    <ul id={styles.menu_nav}>
                        <li><a href="">Accueil</a></li>
                        <li><a href="#travaux">Travaux</a></li>
                        <li><a href="#about">à propos</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </motion.div>
            <nav className={styles.nav}>
                <h2>Emilien Rozier</h2>
                <div id={styles.burger} onClick={() => setMenuState("open")}>
                    <svg width="50" height="25" viewBox="0 0 50 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="50" height="3" rx="1.5" fill="#040404" />
                        <rect y="22" width="50" height="3" rx="1.5" fill="#040404" />
                    </svg>
                </div>
            </nav>
        </>
    )
}

export default Navbar