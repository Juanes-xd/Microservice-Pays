import { Router } from "express";
import {
  getFactura,
  getFacturas,
  deleteFactura,
  updateFactura,
  createFactura,
} from "../controllers/factura.controller.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";
const router = Router();

router.get("/facturas", getFacturas);
router.get("/factura/:id", getFactura);
router.post("/facturas", [verifyToken, isAdmin], createFactura);
router.delete("/factura/:id", [verifyToken, isAdmin], deleteFactura);
router.put("/factura/:id", [verifyToken, isAdmin], updateFactura);
