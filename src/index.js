// common js
// const express + require("express")

// es6
import express from "express";

//routes
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

// app.use es un middleware donde le pasamos las rutas
app.use(employeesRoutes);
app.use(indexRoutes);

app.listen(3000, () => {
  console.log("Server on port 3000");
});
