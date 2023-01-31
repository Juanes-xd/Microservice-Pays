import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";
import { Pedido } from "./Pedido.js";

export const Factura = sequelize.define(
  "factura",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_pedido: {
      type: DataTypes.INTEGER,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER,
    },
    total: {
      type: DataTypes.INTEGER,
    },
    direccion: {
      type: DataTypes.STRING,
    },
    ciudad: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: true }
);

Factura.hasOne(Pedido, {
  foreingkey: "id_pedido",
});
