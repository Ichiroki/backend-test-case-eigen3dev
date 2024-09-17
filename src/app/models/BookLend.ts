import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export class BookLend {
    constructor(
        public readonly id: string,
        public books_code: string,
        public member_code: string,
    ) { }

    static async find (code: string) {
        const BookLend = await prisma.books_borrowed_by_member.findMany({
            where: {
                OR: [
                    {
                        books_code: code
                    },
                    {
                        member_code: code
                    }
                ]
            },
            select: {
                member: {
                    select: {
                        name: true
                    }
                },
                books: {
                    select: {
                        title: true,
                        author: true
                    }
                }
            }
        })

        return BookLend
    }

    static async delete (code: number) {
        const BookLendDel = await prisma.books_borrowed_by_member.delete({
            where: {
                id: code
            }
        })

        return BookLendDel
    }
}