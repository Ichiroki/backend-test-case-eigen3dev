import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { Member } from '../models/Member'

const prisma = new PrismaClient()

export const getMember = async (req: Request, res: Response) => {
    try {
        const memberCode = req.params.code
        const member = await Member.find(memberCode)
        if(member) {
            res.status(200).json({member, message: 'User founded'})
        } else {
            res.status(404).json({ message: 'User not found' })
            throw "User not found"
        }
    } catch(err) {
        console.error(err)
    }
}

export const addMember = async (req: Request, res: Response) => {
    try {
        const member = req.body
        const addUser = await prisma.members.create({
            data: {
                code: member.code,
                name: member.name,
            }
        })

        return res.status(201).json({member: addUser, message: 'User successfully added'})
    } catch(err) {
        console.log(err)
    }
}