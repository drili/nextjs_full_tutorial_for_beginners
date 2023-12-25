import userModel from "@/models/User"
import connect from "@/utils/db"

import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    const { name, email, password } = await request.json()

    await connect()

    const hashedPassword = await bcrypt.hash(password, 5)

    const newUser = new userModel({
        name: name,
        email: email,
        password: hashedPassword,
    })

    try {
        await newUser.save()

        return new NextResponse("User has been created successfully", { status: 201 })
    } catch (error) {
        return new NextResponse(error.message, { status: 500 })
    }
}