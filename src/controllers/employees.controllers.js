import { pool } from "../db.js";

// aca obtenemos todos los empleados
export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.json(rows);
};

// y tambien vamos a obtener los empleados por id
export const getEmployeeById = async (req, res) => {
  // WHERE es para buscar en la tabla
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    req.params.id,
  ]);
  if (rows.length <= 0) {
    return res.status(404).json({ status: 404, message: "Employee not found" });
  }
  res.json(rows[0]);
};

//podemos insertar uno a uno los valores o podemos insertar un objeto
export const createEmployees = async (req, res) => {
  const { name, salary } = req.body;
  // queda pendiente el manejo de errores y la validacion de los datos
  const [rows] = await pool.query(
    "INSERT INTO employee (name,salary) VALUES (?,?)",
    [name, salary]
  );
  // res.send sirve para enviar una respuesta al cliente
  res.send({ id: rows.insertId, name, salary });
};

export const updateEmployees = (req, res) => {
  res.send("Actualizando empleados");
};

export const deleteEmployees = (req, res) => {
  res.send("Eliminando empleados");
};
