"use client"

import React, { useState } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import styles from "./page.module.css"

const Login = () => {
    const [error, setError] = useState(false)
    const router = useRouter()
    const session = useSession()

    if (session.loading === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "authenticated") {
        router?.push("/dashboard")
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const email = e.target[0].value
        const password = e.target[1].value

        signIn("credentials", { email, password })
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input required type='email' placeholder='username' className={styles.input} />
                <input required type='password' placeholder='password' className={styles.input} />

                <button className={styles.button}>Login</button>
            </form>
            <button onClick={() => signIn("google")}>Login with Google</button>
        </div>
    )
}

export default Login