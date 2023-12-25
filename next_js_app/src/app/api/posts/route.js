import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post"

export const GET = async (request) => {
    // *** Fetch
    const url = new URL(request.url)

    const username = url.searchParams.get("username")

    try {
        await connect()

        const posts = await postModel.find(username && { username })

        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}

export const POST = async (request) => {
    // *** Fetch
    const body = await request.json()

    const newPost = new postModel(body)

    try {
        await connect()

        await newPost.save()

        return new NextResponse("Post has been created", { status: 201 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}