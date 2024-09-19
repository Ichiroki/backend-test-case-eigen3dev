import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main () {
    // members

    const angga = await prisma.members.createMany({
        data: {
            code: "M001",
            name: 'Angga',
            isPenalty: false,
            penalty_date: null,
        }
    })

    const ferry = await prisma.members.createMany({
        data: {
            code: "M002",
            name: 'Ferry',
            isPenalty: false,
            penalty_date: null,
        }
    })

    const putri = await prisma.members.createMany({
        data: {
            code: "M003",
            name: 'Putri',
            isPenalty: true,
            penalty_date: null,
        }
    })

    const jk45 = await prisma.books.createMany({
        data: {
            code: "JK-45",
            title: "Harry Potter",
            author: "J.K Rowling",
            stock: 1
        }
    })

    const hob83 = await prisma.books.createMany({
        data: {
            code: "HOB-83",
            title: "The Hobbit, or There and Back Again",
            author: "J.R.R. Tolkien",
            stock: 1
        }
    })

    const nrn7 = await prisma.books.createMany({
        data: {
            code: "NRN-7",
            title: "The Lion, the Witch and the Wardrobe",
            author: "C.S. Lewis",
            stock: 1
        }
    })

    const shr1 = await prisma.books.createMany({
        data: {
            code: "SHR-1",
            title: "A Study in Scarlet",
            author: "Arthur Conan Doyle",
            stock: 1
        }
    })

    const tw11 = await prisma.books.createMany({
        data: {
            code: "TW-11",
            title: "Twilight",
            author: "Stephenie Meyer",
            stock: 1
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })