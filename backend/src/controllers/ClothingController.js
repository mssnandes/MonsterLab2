import { createClothing, findAllClothings } from "../models/Clothing.js";

export const findClothing = async (req, res) => {
    try {
      let findById = req.params.id;  
      const clothing = await findAllClothings(findById);
      res.status(200).json({ clothing });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get funcionarios", message: error.message });
    }
  };


  export const findAllClothing = async (req, res) => {
    try {  
      const clothing = await prisma.clothing.findMany();
      res.status(200).json({ clothing });
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
            size: dado.size,
        };
        const info = await createClothing(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create Mesa", message: error.message });
    }
};