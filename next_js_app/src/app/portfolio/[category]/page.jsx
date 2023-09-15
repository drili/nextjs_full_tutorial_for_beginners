import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/button/Button'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from "next/navigation"

const getData = (cat) => {
    const data = items[cat]

    if(data) {
        return data
    }

    return notFound()
}

const Category = ({ params }) => {
    const data = getData(params.category)

    return (
        <div>
            <h1 className={styles.catTitle}>{params.category}</h1>

            {data.map(item => (
                <div key={item.id} className={styles.item}>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.desc}>{item.description}</p>
                        <Button
                            url="/"
                            text="See more"
                        ></Button>
                    </div>
                    <div className={styles.imgContainer}>
                        <Image
                            className={styles.img}
                            src={item.image}
                            alt=""
                            fill={true}
                        ></Image>
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Category