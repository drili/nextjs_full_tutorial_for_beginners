"use client"

import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

import styles from "./page.module.css"

const Dashboard = () => {
    // *** useEffect() example:
    // useEffect(() => {
    //     const getData = async () => {
    //         setIsLoading(true)

    //         const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    //             cache: "no-store"
    //         })

    //         if(!res.ok) {
    //             // throw new Error("::: Failed to getData()")
    //             setErr(true)
    //         }

    //         const data = await res.json()

    //         setIsLoading(false)
    //         setData(data)
    //     }

    //     getData()
    // }, [])

    const session = useSession()
    const router = useRouter()

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, mutate, error, isLoading } = useSWR(`/api/posts?username=${session?.data?.user.name}`, fetcher)

    const handleSubmit = async (e) => {
        e.preventDefault()

        const title = e.target[0].value
        const desc = e.target[1].value
        const img = e.target[2].value
        const content = e.target[3].value

        try {
            await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    title, desc, img, content, username: session.data.user.name
                })
            })

            mutate()
        } catch (error) {
            console.log(error);
        }
    }

    if (session.loading === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    if (session.status === "authenticated") {
        return (
            <div className={styles.container}>
                <div className={styles.posts}>
                    {isLoading ? "loading" : data.map(post => (
                        <section className={styles.post} key={post._id}>
                            <div className={styles.imgContainer}>
                                <Image
                                    alt=''
                                    src={post.img}
                                    width={200}
                                    height={100}
                                    className={styles.img}
                                />
                            </div>

                            <h2 className={styles.postTitle}>{post.title}</h2>

                            <span className={styles.delete}>X</span>
                        </section>
                    ))}

                </div>


                <form className={styles.new} onSubmit={handleSubmit}>
                    <h1>Add New Post</h1>

                    <input type='text' placeholder='Title' className={styles.input}/>
                    <input type='text' placeholder='Desc' className={styles.input}/>
                    <input type='text' placeholder='Image' className={styles.input}/>

                    <textarea placeholder='Content' className={styles.textArea} cols="30" rows="10"></textarea>

                    <button className={styles.button}>Send</button>
                </form>
            </div>
        )
    }
}

export default Dashboard