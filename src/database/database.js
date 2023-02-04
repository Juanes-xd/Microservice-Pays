import Sequelize from "sequelize";
import { config } from "dotenv";
config();

export const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  process.env.PORT,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);
