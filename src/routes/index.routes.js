import { Router } from "express";
import { ping } from "../controllers/index.controllers.js";

// router viene siendo lo mismo que app, tiene sus metodos get, post, put, delete
const router = Router();

router.get("/ping", ping);

export default router;
