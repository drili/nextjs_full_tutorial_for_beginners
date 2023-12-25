"use client"

import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

import styles from "./navbar.module.css"
import DarkModeToggle from '../darkmode/DarkModeToggle'

const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard",
    },
]

const Navbar = () => {
    const session = useSession()

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Home Page</Link>

            <div className={styles.links}>
                <DarkModeToggle></DarkModeToggle>
                {links.map(link => (
                    <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                ))}

                {session.status === "authenticated" &&
                    <button
                        className={styles.logout}
                        onClick={signOut}
                    >
                        Logout
                    </button>
                }

                {session.status === "unauthenticated" &&
                    <Link href="/dashboard/login">
                        Login
                    </Link>
                }
            </div>
        </div>
    )
}

export default Navbar