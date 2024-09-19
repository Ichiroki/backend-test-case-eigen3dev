import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class Member {
    constructor(
        public readonly code: string,
        public name: string,
    ) { }
    static async find (code: string) {
        const member = await prisma.members.findUnique({
            where: {
                code
            },
            select: {
                code: true,
                name: true,
                isPenalty: true
            }
        })

        return member
    }
}