import { NextResponse } from "next/server"

export const GET = async (request) => {
    // *** Fetch

    return new NextResponse("It Works", { status: 200 })
}