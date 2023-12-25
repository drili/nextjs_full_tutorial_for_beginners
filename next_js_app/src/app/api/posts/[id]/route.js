import connect from "@/utils/db"
import { NextResponse } from "next/server"
import postModel from "@/models/Post"

export const GET = async (request, { params }) => {
    const { id } = params

    try {
        await connect()

        const post = await postModel.findById(id)

        return new NextResponse(JSON.stringify(post), { status: 200 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    const { id } = params

    try {
        await connect()

        await postModel.findByIdAndDelete(id)

        return new NextResponse("Post has been deleted", { status: 200 })
    } catch (error) {
        return new NextResponse("Database error", { status: 500 })
    }
}