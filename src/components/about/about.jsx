import React, { useRef } from 'react';
import styles from './about.module.css';

const About = () => {
    return (
        <>
            <div className={styles.about} id='about' style={{ opacity: 1 }}>
                <div className={styles.about_left}>
                    <img src="/images/pp.jpg" alt="photo d'Emilien" id="pp" />
                </div>
                <div className={styles.about_right}>
                    <h2>à propos</h2>
                    <p>
                        Actuellement en BUT MMI à Troyes, je me retrouve beaucoup dans cette formation. Le profil de MMI, c’est quelqu’un qui touche à tout. Nous parcourons 
                        les différentes étapes de la conception d’un site en passant par la création graphique (webdesign, UX, UI) mais aussi la création des contenus jusqu’à 
                        la création du site, à l’aide de CMS comme Wordpress, ou de zéro avec des frameworks back et front comme Symfony ou <br/>
                        Nous voyons aussi le déploiement de service avec des cours de devOps et administration (Apache2, Ngin, Docker, Ansible), 
                        mise en place de base de données comme MYSQL ou MongoDB.
                    </p>
                    <br />
                    <p>
                    J’avoue ne pas encore savoir me placer sur mes envies, car beaucoup de choses me plaisent dans ces métiers. Néanmoins je sais que je suis moins attiré par 
                    le côté UI / UX, même si j’aime apporter un certain soin à mes sites.
                    </p>
                </div>
            </div>
        </>
    )
}

export default About