import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
    return (
        <div className={styles.container}>
            <div>@2023 - Drili. All rights reserved.</div>
            <div className={styles.socials}>
                <Image  className={styles.icon} src="/1-1.png" width={15} height={15} alt="Testing" />
                <Image  className={styles.icon} src="/2-1.png" width={15} height={15} alt="Testing" />
                <Image  className={styles.icon} src="/3-1.png" width={15} height={15} alt="Testing" />
                <Image  className={styles.icon} src="/4-1.png" width={15} height={15} alt="Testing" />
            </div>
        </div>
    )
}

export default Footer