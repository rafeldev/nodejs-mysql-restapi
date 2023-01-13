// common js
// const express + require("express")

// es6
import express from "express";
import { pool } from "./db.js";

const app = express();

//rutas o endpoints

app.get("/ping", async (req, res) => {
  //esto es asincrono por eso lo llamamos con async/await
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
});

app.get("/employes", (req, res) => {
  res.send("Obteniendo empleados");
});

app.post("/employes", (req, res) => {
  res.send("Creando empleados");
});

app.put("/employes", (req, res) => {
  res.send("Actualizando empleados");
});

app.delete("/employes", (req, res) => {
  res.send("Eliminando empleados");
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
