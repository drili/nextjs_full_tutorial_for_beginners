import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
    return (
        <div>
            <h1 className={styles.catTitle}>{params.category}</h1>

            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, perferendis.</p>
                    <Button
                        url="/"
                        text="See more"
                    ></Button>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                        alt=""
                        fill={true}
                    ></Image>
                </div>

            </div>
        </div>
    )
}

export default Category