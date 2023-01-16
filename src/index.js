// common js
// const express + require("express")

// es6
import express from "express";

//routes
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

//para poder interpretar los datos que nos envian desde el cliente
app.use(express.json());

// app.use es un middleware donde le pasamos las rutas
// '/api' es un prefijo para todas las rutas
app.use("/api", employeesRoutes);
app.use(indexRoutes);

app.listen(3000, () => {
  console.log("Server on port 3000");
});
