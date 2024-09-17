import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class Book {
    constructor(
        public readonly code: string,
        public title: string,
        public author: string,
        public stock: number
    ) { }

    static async find (code: string) {
        const user = await prisma.books.findUnique({
            where: {
                code
            }
        })

        return user
    }
}