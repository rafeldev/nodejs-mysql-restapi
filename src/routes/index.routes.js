import { Router } from "express";
import { pool } from "../db.js";

// router viene siendo lo mismo que app, tiene sus metodos get, post, put, delete
const router = Router();

router.get("/ping", async (req, res) => {
  //esto es asincrono por eso lo llamamos con async/await
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
});

export default router;
