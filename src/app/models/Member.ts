import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class Member {
    constructor(
        public readonly code: string,
        public name: string,
    ) { }
    static async find (code: string) {
        const user = await prisma.members.findUnique({
            where: {
                code
            }
        })

        return user
    }
}