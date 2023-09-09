import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'

const BlogPost = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container}>
                <div className={styles.top}>
                    <div className={styles.info}>
                        <h1 className={styles.title}>Test title</h1>
                        <p className={styles.desc}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo ut voluptates voluptate voluptatibus ipsum obcaecati tempore nihil mollitia praesentium molestiae?
                        </p>
                        <div className={styles.author}>
                            <Image
                                src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                                alt=""
                                width={40}
                                height={40}
                                className={styles.avatar}
                            />
                            <span className={styles.username}>Username Test</span>
                        </div>
                    </div>
                    <div className={styles.imageContainer}>
                        <Image
                            src="https://images.pexels.com/photos/17427379/pexels-photo-17427379/free-photo-of-a-pelican-by-a-sea.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                            alt=""
                            fill={true}
                            className={styles.image}
                        />
                    </div>
                </div>
                <div className={styles.content}>
                    <p className={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos mollitia sit ex illum saepe reiciendis perspiciatis quas officiis! Pariatur facere illum accusamus, odit expedita aliquid distinctio. Laudantium perspiciatis nam laboriosam soluta natus suscipit beatae. Quod quia sequi nulla saepe cum!<br/><br/>

                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum quisquam officia exercitationem cumque corrupti, quidem maiores perspiciatis corporis omnis sunt, voluptatem id fugiat rem illo nesciunt quam et, soluta reprehenderit.<br/><br/>

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius facilis excepturi non, distinctio, consequatur nobis qui aliquid provident amet id voluptatem consectetur assumenda nostrum dolorum repellendus in sed placeat officiis. Vero quidem quos tempore magni, ad reiciendis debitis est similique? Nisi cumque velit sed nihil sit sapiente quae tenetur ea veritatis, optio dolorum suscipit nulla atque enim illo et. Sunt ullam quod autem possimus aliquam beatae dolorem a voluptas. Eveniet illum id repudiandae quam dolor dolorem, ut iure et fugiat itaque vero sequi quidem explicabo quia aut deleniti laudantium! Repellendus laboriosam nisi adipisci, odit mollitia tempora consectetur officia labore nobis?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost