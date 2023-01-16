import { pool } from "../db.js";
export const getEmployees = (req, res) => {
  res.send("Obteniendo empleados");
};

//podemos insertar uno a uno los valores o podemos insertar un objeto
export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  // queda pendiente el manejo de errores y la validacion de los datos
  const [rows] = await pool.query(
    "INSERT INTO employee (name,salary) VALUES (?,?)",
    [name, salary]
  );
  res.send({ id: rows.insertId, name, salary });
};

export const updateEmployees = (req, res) => {
  res.send("Actualizando empleados");
};

export const deleteEmployees = (req, res) => {
  res.send("Eliminando empleados");
};
