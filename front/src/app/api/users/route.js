import { NextRequest, NextResponse } from "next/server";

export const base = axios.create('localhost:2000')

export const getUsers = async () => {
    const data = base.get('/users')
    return data
}

export default createUser = async ({ firstname, lastname, age }) => {
    const data = base.post('/users', { firstname: firstname, lastname: lastname, age: age })
    return data
}


