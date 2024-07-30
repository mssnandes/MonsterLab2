import { createCart, findAllCartsItems, deleteItem } from "../models/Cart.js";

export const findItemCart = async (req, res) => {
    try {
      let findById = req.params.id;  
      const itemCart = await findAllCartsItems(findById);
      res.status(200).json({ itemCart });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get funcionarios", message: error.message });
    }
  };


export const findAllItemsCart = async (req, res) => {
    try {  
      const itemsCart = await prisma.cart.findMany();
      res.status(200).json({ itemsCart });
    } catch (error) {
      res
        .status(500)
        .json({ error: "Failed to get items cart", message: error.message });
    }
  };

export const create = async (req, res) => {
    try {
        let dado = req.body;
        const data = {
            type: dado.type,
            name: dado.name,
            image: dado.image,
            price: dado.price,
            quantity: dado.quantity,
            size: dado.size,
            sabor: dado.sabor,
        };
        const info = await createCart(data);
        return res.status(201).json({ info });
    }
    catch (error) {
        res
            .status(500)
            .json({ error: "Failed to create item cart", message: error.message });
    }
};

export const deleteItemCart = async (req, res) => {
  try {
    let findById = req.params.id;
    await deleteItem(findById);
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete item", message: error.message });
  }
};