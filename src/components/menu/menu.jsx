"use client"

import React, { useEffect, useRef, useState } from 'react';
import styles from './menu.module.css';
import { useInView } from 'framer-motion';

function Spacer({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className={styles.spacer} style={{ width: isInView ? "100%" : 0 }}>
            {children}
        </div>
    )
}

export default function Menu() {

    const [pages, setPages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost/api/works', {mode: 'no-cors'});
                const { works } = await res.json();
                setPages(works);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        };

        fetchData();
    }, []);

    // const pages = [
    //     { id: 1, title: "Portfolio", year: 2023, techno: ["dev", "gsap", "js"] },
    //     { id: 2, title: "Blog next js", year: 2022, techno: ["nodejs", "nextjs", "scss"] }
    // ]

    let i = 0;

    return (
        <>
            <div className={styles.travaux} id="travaux">
                <ul>
                    <Spacer />
                    {pages.map((pages) => (
                        <React.Fragment key={pages._id}>
                            <li>
                                <a href={`/work/${pages._id}`}>
                                    <div className={styles.top}>
                                        <p>{'0' + (i += 1)}</p>
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
                            <Spacer />
                        </React.Fragment>
                    ))}
                </ul>
            </div>
            {/* {pages.map((pages, index) => {
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
                    })} */}
        </>
    )
}