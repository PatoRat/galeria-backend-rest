import { type PrismaClient } from "@prisma/client"
import ProductRoute from "./product.route"
import { type Express } from "express"

const addRoutes = (app: Express, prisma: PrismaClient) => {
    app.use('/', ProductRoute(prisma));
}

export default addRoutes