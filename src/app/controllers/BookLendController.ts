import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { Book } from '../models/Book'

const prisma = new PrismaClient()

export const getLendTicket = async (req: Request, res: Response) => {
    try {
        const bookCode = req.params.code
        const book = await Book.find(bookCode)
        if(book) {
            res.status(200).json({book, message: 'Book founded'})
        } else {
            res.status(404).json({ message: 'Book not found' })
            throw "Book not found"
        }
    } catch(err) {
        console.error(err)
    }
}

export const addLendTicket = async (req: Request, res: Response) => {
    try {
        const book = req.body

        const getBook = await Book.find(book.books_code)
        if(getBook?.stock !== 0) {
            const currDate = new Date().toISOString()

            const addBook = await prisma.books_borrowed_by_member.createMany({
                data: {
                    member_code: book.member_code,
                    books_code: book.books_code,
                    lend_date: currDate
                }
            })

            if(addBook) {
                await prisma.books.update({
                    where: {
                        code: getBook?.code
                    },
                    data: {
                        stock: 0
                    }
                })

                res.status(201).json({addBook, message: 'This book successfully borrowed' })
            }

        } else {
            res.status(422).json({ message: 'This book was been borrowed' })
        }


        // return res.status(201).json({book: add, message: 'Book successfully added'})
    } catch(err) {
        console.log(err)
    }
}