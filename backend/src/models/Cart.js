const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.addToCart = async (productId, quantity) => {
    return prisma.cart.create({
        data: {
            productId: parseInt(productId, 10),
            quantity: parseInt(quantity, 10),
        },
    });
};

exports.updateCartItem = async (productId, quantity) => {
    return prisma.cart.updateMany({
        where: { productId: parseInt(productId, 10) },
        data: { quantity: parseInt(quantity, 10) }
    });
};

exports.removeCartItem = async (productId) => {
    return prisma.cart.deleteMany({
        where: { productId: parseInt(productId, 10) }
    });
};

exports.getCartItems = async () => {
    return prisma.cart.findMany();
};
