import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()

const app = express();
const port = process.env.PORT || 3000;

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

const server = app.listen(port, () =>
  console.log(`🚀 Server ready at: http://localhost:${port}`),
)