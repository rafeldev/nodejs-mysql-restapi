import { Router } from "express";
import {
  createEmployees,
  deleteEmployees,
  getEmployees,
  updateEmployees,
  getEmployeeById,
} from "../controllers/employees.controllers.js";

// router viene siendo lo mismo que app, tiene sus metodos get, post, put, delete
const router = Router();

router.get("/employees", getEmployees);

//agregamos un parametro a la ruta para obtenerlo por id
router.get("/employees/:id", getEmployeeById);

router.post("/employees", createEmployees);

router.put("/employees", updateEmployees);

router.delete("/employees", deleteEmployees);

export default router;
