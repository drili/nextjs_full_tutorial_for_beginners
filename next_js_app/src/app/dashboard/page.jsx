"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'

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
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

    if (session.loading === "loading") {
        return <p>Loading...</p>
    }

    if (session.status === "unauthenticated") {
        router?.push("/dashboard/login")
    }

    if (session.status === "authenticated") {
        return (
            <div>Dashboard 1</div>
        )
    }
}

export default Dashboard