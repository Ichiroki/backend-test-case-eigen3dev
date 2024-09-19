require('dotenv').config()
const Express = require('express')
import { PrismaClient } from "@prisma/client"
import bodyParser from "body-parser"
import cookieParser from 'cookie-parser'
import cors from 'cors'

const app = Express()

const prisma = new PrismaClient()

const api = require('./src/routes/api.ts')

app.use(cors({
    origin: '*',
    preflightContinue: true,
    credentials: true
}))

// Middleware setup
app.use(Express.json())
app.use(cookieParser())
app.use(bodyParser.json())

// Routes
app.use('/api', api)

// Start Server

const initializeApp = async () => {
    let lendDate: any = null

    try {
        const allMembers = await prisma.members.findMany({
            select: {
                code: true,
                books_borrowed: {
                    select: {
                        lend_date: true
                    }
                }
            }
        })

        for (const member of allMembers) {
            member?.books_borrowed.map((res) => {
                lendDate = res.lend_date
            })

            if(lendDate) {
                const today = new Date()
                const lendDateObj = new Date(lendDate)
                const diffTime = today.getTime() - lendDateObj.getTime()
                const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

                if(diffDays >= 7) {
                    await prisma.members.update({
                        where: {
                            code: member.code
                        },
                        data: {
                            isPenalty: true
                        }
                    })
                }
            }
        }
    } catch(e) {
        console.error(e)
    }
}

const port = process.env.APP_PORT;
app.listen(port, () => {
    console.log(`Server running on port http://127.0.0.1:${port}`)

    initializeApp()
})