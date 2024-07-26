import { createSuplements, findAllSuplements } from "../models/Suplements.js";

export const findSuplement = async (req, res) => {
  try {
    let findById = req.params.id;  
    const suplement = await findAllSuplements(findById);
    res.status(200).json({ suplement });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to get funcionarios", message: error.message });
  }
};


export const findAllSuplement = async (req, res) => {
  try {  
    const suplement = await prisma.suplements.findMany();
    res.status(200).json({ suplement });
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
            nameProduct: dado.nameProduct,
            image: dado.image,
            marca: dado.marca,
            price: dado.price,
            description: dado.description,
            promotion: dado.promotion,
            stock: dado.stock,
            weight: dado.weight
        };
        const info = await createSuplements(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create Mesa", message: error.message });
    }
};