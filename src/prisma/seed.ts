import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function main () {
    const angga = await prisma.members.createMany({
        data: {
            code: "M001",
            name: 'Angga'
        }
    })

    const ferry = await prisma.members.createMany({
        data: {
            code: "M002",
            name: 'Ferry'
        }
    })

    const Putri = await prisma.members.createMany({
        data: {
            code: "M003",
            name: 'Putri'
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