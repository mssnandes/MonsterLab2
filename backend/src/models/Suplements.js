import { prisma } from "../../config/prisma.js";

export const findAllSuplements = async (id) => {
  try{
  return await prisma.Suplements.findUnique({
    where:{
      id : parseInt(id)
    } 
  });
} catch (error) {
  throw new Error(`Failed to get ad by id: ${error.message}`);
}
};

export const createSuplements = async (data) => {
  try {
    return await prisma.Suplements.create({
      data: {
        nameProduct: data.nameProduct,
        image: data.image,
        marca: data.marca,
        price: data.price,
        description: data.description,
        promotion: data.promotion,
        stock: data.stock,
        weight: data.weight
      },
    });
  } catch (error) {
    throw new Error(`Failed to create ad: ${error.message}`);
  }
};