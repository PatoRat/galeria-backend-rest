import { PrismaClient } from "@prisma/client";

const getProducts = async (prisma: PrismaClient) => {
    return await prisma.product.findMany();
}

const postProduct = async (
    prisma: PrismaClient,
    titulo: string,
    imagenURL: string,
    descripcion: string,
    precio: string) => {
    return await prisma.product.create({
        data: {
            titulo,
            imagenURL,
            descripcion,
            precio,
        },
    });
}

export { getProducts, postProduct };