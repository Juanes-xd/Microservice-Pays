import { sequelize } from "../database/db.js";
import { DataTypes } from "sequelize";

export const Pedido = sequelize.define(
  "pedido",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
    },
    valor: {
      type: DataTypes.INTEGER,
    },
    cantidad: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: true }
);
