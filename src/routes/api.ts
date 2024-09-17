import { Request, Response } from 'express'
import { addMember, getMember } from '../app/controllers/MemberController'
import { addBook, getBook } from '../app/controllers/BookController'

const Express = require('express')
const Api = Express()

Api.get('/test', (req: Request, res: Response) => {
    res.send('<h1>test</h1>')
})

Api.get('/member/:code', getMember)
Api.post('/member/', addMember)

Api.get('/book/:code', getBook)
Api.post('/book/', addBook)

module.exports = Api