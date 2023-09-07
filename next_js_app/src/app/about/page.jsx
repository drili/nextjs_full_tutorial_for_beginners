import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import Button from '@/components/button/Button'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image className={styles.img} src="https://images.pexels.com/photos/15178237/pexels-photo-15178237/free-photo-of-light-dawn-landscape-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1550&dpr=1" fill={true} alt="" />

                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Lorem, ipsum.</h1>
                    <h2 className={styles.imgDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, repudiandae!</h2>
                </div>
            </div>

            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Lorem, ipsum dolor.</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dignissimos adipisci culpa eum dicta assumenda doloribus quia rem architecto cum beatae molestias, aliquid iusto illo iste ducimus iure unde magnam quis quas recusandae necessitatibus odio debitis. Amet, magnam asperiores quaerat nemo, nesciunt consequatur ipsa tempora ut distinctio nulla consequuntur omnis?</p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
                    <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem autem sunt voluptatum assumenda, officiis dolores quae voluptate maiores aut eum dolor amet labore, esse hic aliquam a ex?<br/><br/> Eius vel fugiat facere nisi laboriosam ullam, natus delectus libero ex autem accusantium atque consectetur quibusdam expedita quod sint tempora nobis adipisci laudantium ab iusto voluptate illo. Inventore molestias qui nisi similique.</p>
                    <Button
                        text="Test"
                        url="/"
                    ></Button>
                </div>

            </div>
        </div>
    )
}

export default About