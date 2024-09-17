import { Request, Response } from 'express'
import { addMember, getMember } from '../app/controllers/MemberController'

const Express = require('express')
const Api = Express()

Api.get('/test', (req: Request, res: Response) => {
    res.send('<h1>test</h1>')
})

Api.get('/member/:code', getMember)
Api.post('/member/', addMember)

module.exports = Api