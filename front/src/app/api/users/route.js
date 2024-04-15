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


import express from "express";
const route = express.router()

export function searchbyid(req, res, next) {
    const { id } = req.params
    if (!id) return res.status(402).json({ error: "no string id" })
    res.json({ id: id })
    return next()
}

App.use(searchbyid)

route.get('/users/:id', (req, res) => {
    const { id } = req.params()
    return res.send()
})


