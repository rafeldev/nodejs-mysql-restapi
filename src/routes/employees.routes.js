import { Router } from "express";
import {
  createEmployees,
  deleteEmployees,
  getEmployees,
  updateEmployees,
} from "../controllers/employees.controllers.js";

// router viene siendo lo mismo que app, tiene sus metodos get, post, put, delete
const router = Router();

router.get("/employes", getEmployees);

router.post("/employes", createEmployees);

router.put("/employes", updateEmployees);

router.delete("/employes", deleteEmployees);

export default router;
