import { prisma } from "../../config/prisma.js";

export const findAllAcessories = async (id) => {
  try{
  return await prisma.acessories.findUnique({
    where:{
      id : parseInt(id)
    } 
  });
} catch (error) {
  throw new Error(`Failed to get ad by id: ${error.message}`);
}
};

export const createAcessories = async (data) => {
  try {
    return await prisma.acessories.create({
      data: {
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
        promotion: data.promotion,
        stock: data.stock,
      },
    });
  } catch (error) {
    throw new Error(`Failed to create ad: ${error.message}`);
  }
};