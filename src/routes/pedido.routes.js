import { Router } from "express";
import {
  getPedido,
  getPedidos,
  deletePedido,
  updatePedido,
  createPedido,
} from "../controllers/pedido.controller.js";
import { verifyToken, isAdmin } from "../middlewares/auth.js";
const router = Router();

router.get("/pedidos", getPedidos);
router.get("/pedido/:id", getPedido);
router.post("/pedidos", [verifyToken, isAdmin], createPedido);
router.delete("/pedido/:id", [verifyToken, isAdmin], deletePedido);
router.put("/pedido/:id", [verifyToken, isAdmin], updatePedido);
