import { prisma } from "../../config/prisma.js";

export const createUser = async (data) => {
    return await prisma.User.create({
        data: {
            name: data.name,
            email: data.email,
            password: data.password,
        },
    });
};

  export const findUserByEmail = async (email) => {
    try {
      return await prisma.User.findUnique({
          where: {
              email: email,
          },
      });
  } catch (error) {
      throw new Error(`Falha ao achar usuario: ${error.message}`);
  }
};