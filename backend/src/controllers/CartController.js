const { addToCart, getCartItems, updateCartItem, removeCartItem } = require('../models/cartModel');

exports.addItemToCart = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const newCartItem = await addToCart(productId, quantity);
        res.status(200).json(newCartItem);
    } catch (error) {
        console.error('Erro ao adicionar ao carrinho:', error);
        res.status(500).send('Erro ao adicionar ao carrinho');
    }
};

exports.updateCartItem = async (req, res) => {
    const { productId, quantity } = req.body;
    try {
        const updatedCartItem = await updateCartItem(productId, quantity);
        res.status(200).json(updatedCartItem);
    } catch (error) {
        console.error('Erro ao atualizar item do carrinho:', error);
        res.status(500).send('Erro ao atualizar item do carrinho');
    }
};

exports.removeCartItem = async (req, res) => {
    const { productId } = req.params;
    try {
        const removedCartItem = await removeCartItem(productId);
        res.status(200).json(removedCartItem);
    } catch (error) {
        console.error('Erro ao remover item do carrinho:', error);
        res.status(500).send('Erro ao remover item do carrinho');
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const cartItems = await getCartItems();
        res.status(200).json(cartItems);
    } catch (error) {
        console.error('Erro ao obter itens do carrinho:', error);
        res.status(500).send('Erro ao obter itens do carrinho');
    }
};
