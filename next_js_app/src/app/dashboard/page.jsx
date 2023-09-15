"use client"

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

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

    console.log({ data })

    return (
        <div>Dashboard 1</div>
    )
}

export default Dashboard