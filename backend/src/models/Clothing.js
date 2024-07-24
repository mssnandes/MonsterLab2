import { prisma } from "../../config/prisma.js";

export const findAllClothings = async (id) => {
  try{
  return await prisma.clothing.findUnique({
    where:{
      id : parseInt(id)
    } 
  });
} catch (error) {
  throw new Error(`Failed to get ad by id: ${error.message}`);
}
};

export const createClothing = async (data) => {
  try {
    return await prisma.clothing.create({
      data: {
        name: data.name,
        image: data.image,
        price: data.price,
        description: data.description,
        promotion: data.promotion,
        stock: data.stock,
        size: data.size,
      },
    });
  } catch (error) {
    throw new Error(`Failed to create ad: ${error.message}`);
  }
};