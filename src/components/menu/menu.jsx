import React, { useEffect, useRef, useState } from 'react';
import styles from './menu.module.css';
import { useInView } from 'framer-motion';

function Spacer({children}) {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});

    return (
        <div ref={ref} className={styles.spacer} style={{width: isInView ? "100%" : 0}}>
            {children}
        </div>
    )
}

const Menu = () => {
    const pages = [
        { id: 1, title: "Portfolio", year: 2023, techno: ["dev", "gsap", "js"] },
        { id: 2, title: "Blog next js", year: 2022, techno: ["nodejs", "nextjs", "scss"] }
    ]

    return (
        <>
            <div className={styles.travaux} id="travaux">
                <ul>
                    <Spacer/>
                    {pages.map((pages, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li>
                                    <a href="">
                                        <div className={styles.top}>
                                            <p>{pages.id}</p>
                                            <p>{pages.year}</p>
                                        </div>
                                        <div className={styles.center}>
                                            <div className={styles.center_title}>
                                                {pages.title}
                                            </div>
                                        </div>
                                        <div className={styles.bottom}>
                                            {pages.techno.join(', ')}
                                        </div>
                                    </a>
                                </li>
                                <Spacer/>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Menu