// common js
// const express + require("express")

// es6
import express from "express";

//routes
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

//config
import "./config.js";

const app = express();

//para poder interpretar los datos que nos envian desde el cliente
app.use(express.json());

// app.use es un middleware donde le pasamos las rutas
// '/api' es un prefijo para todas las rutas
app.use("/api", employeesRoutes);
app.use(indexRoutes);

// manejando el error 404 o not found
app.use((req, res, next) => {
  res.status(404).json({ status: 404, message: "Not found" });
});

export default app;
