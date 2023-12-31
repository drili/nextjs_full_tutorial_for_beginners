import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
    title: 'Contact Page',
    description: 'This is a contact page',
}

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/contact.png"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>

                <form className={styles.form} action="">
                    <input type='text' placeholder='name' className={styles.input}></input>
                    <input type='text' placeholder='email' className={styles.input}></input>
                    <textarea className={styles.textArea} placeholder='message' name="" id="" cols="30" rows="10"></textarea>
                    <Button
                        url="#"
                        text="Send"
                    ></Button>
                </form>
            </div>
        </div>
    )
}

export default Contact