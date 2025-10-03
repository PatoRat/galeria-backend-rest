import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.get('/products', async (req, res) => {
  const products = await prisma.product.findMany()
  console.log(products);
  res.json(products)
}) 

app.post(`/products`, async (req, res) => {
  const { titulo, imagenURL, descripcion, precio } = req.body
  const result = await prisma.product.create({
    data: {
      titulo,
      imagenURL,
      descripcion,
      precio,
    },
  })
  console.log(result);
  res.json(result)
})

// app.get(`/post/:id`, async (req, res) => {
//   const { id }: { id?: string } = req.params

//   const post = await prisma.post.findUnique({
//     where: { id: Number(id) },
//   })
//   res.json(post)
// })

// app.get('/feed', async (req, res) => {
//   const { searchString, skip, take, orderBy } = req.query

//   const or: Prisma.PostWhereInput = searchString
//     ? {
//         OR: [
//           { title: { contains: searchString as string } },
//           { content: { contains: searchString as string } },
//         ],
//       }
//     : {}

//   const posts = await prisma.post.findMany({
//     where: {
//       published: true,
//       ...or,
//     },
//     include: { author: true },
//     take: Number(take) || undefined,
//     skip: Number(skip) || undefined,
//     orderBy: {
//       updatedAt: orderBy as Prisma.SortOrder,
//     },
//   })

//   res.json(posts)
// })

const server = app.listen(3000, () =>
  console.log(`🚀 Server ready at: http://localhost:3000`),
)