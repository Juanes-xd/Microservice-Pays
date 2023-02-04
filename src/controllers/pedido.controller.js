import { Pedido } from "../models/Pedido.js";

export const getPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findAll();
    res.status(200).json(pedido);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPedidos = async (req, res) => {
  const { id } = req.params;
  try {
    const pedido = await Pedido.findOne({
      where: {
        id,
      },
    });
    res.json(pedido);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPedido = async (req, res) => {
  const { id_usuario, valor, cantidad } = req.body;
  try {
    const newPedido = await Pedido.create({
      id_usuario,
      valor,

      cantidad,
    });
    res.json(newPedido);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePedido = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Pedido.destroy({
      where: {
        id,
      },
    });
    res.json(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
