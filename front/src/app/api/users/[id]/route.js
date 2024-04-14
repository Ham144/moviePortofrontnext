import { NextResponse } from "next/server"

export function GET(req, res) {
    const { id } = res.params
    if (Number(id)) {
        console.log("yes integer")
    }
    else {
        return NextResponse.json({ error: "you cant send string" })
    }

    return NextResponse.json({ id: id })
}