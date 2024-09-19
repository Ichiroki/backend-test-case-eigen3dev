import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { Book } from '../models/Book'

const prisma = new PrismaClient()

export const getBook = async (req: Request, res: Response) => {
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

export const addBook = async (req: Request, res: Response) => {
    try {
        const book = req.body
        const addBook = await prisma.books.create({
            data: {
                code: book.code,
                title: book.title,
                author: book.author,
                stock: book.stock
            }
        })

        return res.status(201).json({book: addBook, message: 'Book successfully added'})
    } catch(err) {
        console.log(err)
    }
}