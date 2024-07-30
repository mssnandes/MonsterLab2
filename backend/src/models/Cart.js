import { prisma } from "../../config/prisma.js";

export const findAllCartsItems = async (id) => {
    try{
    return await prisma.cart.findUnique({
      where:{
        id : parseInt(id)
      } 
    });
  } catch (error) {
    throw new Error(`Failed to get ad by id: ${error.message}`);
  }
  };

export const createCart = async (data) => {
    try {
      return await prisma.cart.create({
        data: {
          type: data.type,
          name: data.name,
          image: data.image,
          price: data.price,
          quantity: data.quantity,
          size: data.size,
          sabor: data.sabor,
        },
      });
    } catch (error) {
      throw new Error(`Failed to create ad: ${error.message}`);
    }
  };

  export const deleteItem = async (id) => {
    try {
      return await prisma.cart.delete({
        where: {
          id: parseInt(id)
        }
      });
    } catch (error) {
      throw new Error(`Failed to delete cart item: ${error.message}`);
    }
  };
  