import React from 'react'
import styles from './contact.module.css'

const Contact = () => {

    return (
        <div className={styles.contact} id="contact" >
            <div className={styles.contact_content} id={styles.contact_mail}>
                <a href="mailto:emilien.rozier@gmail.com">Contactez@moi</a>
            </div>
        </div>
    )
}

export default Contact