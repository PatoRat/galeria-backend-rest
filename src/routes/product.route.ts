import { type PrismaClient, type Prisma } from "@prisma/client"
import { Router, type Express } from "express"
import { getProducts, postProduct } from '../controllers/ProductController'

const ProductRoute = (prisma: PrismaClient) => {
    const router = Router();

    router.get('/products', async (req, res) => {
        const products = await getProducts(prisma);
        console.log(products);
        res.json(products)
    });

    router.post('/products', async (req, res) => {
        const { titulo, imagenURL, descripcion, precio } = req.body
        const result = await postProduct(prisma, titulo, imagenURL, descripcion, precio);
        console.log(result);
        res.json(result)
    });

    return router;
}



export default ProductRoute;