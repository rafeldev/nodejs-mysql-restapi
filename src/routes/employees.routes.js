import { Router } from "express";

// router viene siendo lo mismo que app, tiene sus metodos get, post, put, delete
const router = Router();

router.get("/employes", (req, res) => {
  res.send("Obteniendo empleados");
});

router.post("/employes", (req, res) => {
  res.send("Creando empleados");
});

router.put("/employes", (req, res) => {
  res.send("Actualizando empleados");
});

router.delete("/employes", (req, res) => {
  res.send("Eliminando empleados");
});

export default router;
