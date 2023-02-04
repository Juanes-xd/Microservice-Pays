import { Factura } from "../models/Factura.js";

export const getFactura = async (req, res) => {
  try {
    const factura = await Factura.findAll();
    res.status(200).json(factura);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFacturas = async (req, res) => {
  const { id } = req.params;
  try {
    const factura = await Factura.findOne({
      where: {
        id,
      },
    });
    res.json(factura);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFactura = async (req, res) => {
  const { id_pedido, id_user, precio, total, direccion, ciudad } = req.body;
  try {
    const newFactura = await Factura.create({
      id_pedido,
      id_user,
      precio,
      total,
      direccion,
      ciudad,
    });
    res.json(newFactura);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFactura = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Factura.destroy({
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
