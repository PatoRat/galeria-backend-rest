import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const productData: Prisma.ProductCreateInput[] = [
    {
        imagenURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXYSj7QcBF--Al06dftcCJ20Xw6F8xHxhJMA&s",
        titulo: 'Tostadora',
        descripcion: 'Nueva de SmartLife',
        precio: '$65000'
    },
    {
        imagenURL: 'https://www.lg.com/cac/images/microondas/md07583967/gallery/d1.jpg',
        titulo: 'Microondas',
        descripcion: 'Alta calidad LG',
        precio: '$146950'
    },
    {
        imagenURL: "https://osterar.vtexassets.com/arquivos/ids/157693-800-auto?v=638772137804570000&width=800&height=auto&aspect=true",
        titulo: 'Licuadora',
        descripcion: 'Oster Argentina',
        precio: '$240000'
    },
]

async function main() {
    console.log(`Start seeding ...`)
    for (const p of productData) {
        const product = await prisma.product.create({
            data: p,
        })
        console.log(`Created product with id: ${product.id}`)
    }
    console.log(`Seeding finished.`)
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });