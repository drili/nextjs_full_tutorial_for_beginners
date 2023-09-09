import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
        <Link href="/blog/testId" className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=''
                    width={400}
                    height={250}
                    className={styles.image}
                ></Image>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti id obcaecati, cum temporibus laudantium?</p>
            </div>
        </Link>

        <Link href="/blog/testId" className={styles.container}>
            <div className={styles.imageContainer}>
                <Image
                    src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                    alt=''
                    width={400}
                    height={250}
                    className={styles.image}
                ></Image>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>Test</h1>
                <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corrupti id obcaecati, cum temporibus laudantium?</p>
            </div>
        </Link>
    </div>
  )
}

export default Blog