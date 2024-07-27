import { createAcessories, findAllAcessories } from "../models/Acessories.js";

export const findAcessorie = async (req, res) => {
    try {
      let findById = req.params.id;  
      const acessories = await findAllAcessories(findById);
      res.status(200).json({ acessories });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get funcionarios", message: error.message });
    }
  };


  export const findAllAcessorie = async (req, res) => {
    try {  
      const acessories = await prisma.acessories.findMany();
      res.status(200).json({ acessories });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get funcionarios", message: error.message });
    }
  };

  export const create = async (req, res) => {
    try {
        let dado = req.body;
        const data = {
            name: dado.name,
            image: dado.image,
            price: dado.price,
            description: dado.description,
            promotion: dado.promotion,
            stock: dado.stock,
        };
        const info = await createAcessories(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create Mesa", message: error.message });
    }
};