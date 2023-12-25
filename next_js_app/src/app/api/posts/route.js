import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post"

export const GET = async (request) => {
    // *** Fetch
    try {
        await connect()

        const posts = await postModel.find()
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}