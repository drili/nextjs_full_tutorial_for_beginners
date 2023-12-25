import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post"

export const GET = async (request, { params }) => {
    try {
        await connect()
        const { id } = params

        const post = await postModel.findById(id)

        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}