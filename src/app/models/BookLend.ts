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

    static async suspendMember(member_code: string) {
        let lendDate: any = null

        const findMem = await prisma.members.findUnique({
            where: {
                code: member_code
            },
            select: {
                isPenalty: true,
                books_borrowed: {
                    select: {
                        lend_date: true
                    }
                }
            }
        })

        findMem?.books_borrowed.map((res) => {
            lendDate = res.lend_date
        })

        return lendDate
    }
}