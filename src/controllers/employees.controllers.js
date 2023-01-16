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

export const deleteEmployees = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
    req.params.id,
  ]);
  if (result.affectedRows <= 0) {
    return res.status(404).json({ status: 404, message: "Employee not found" });
  }
  // 204 significa que todo salio bien pero no hay contenido
  res.sendStatus(204);
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

// en mysql no devuelve el dato que actualizamos, solo devuelve el numero de filas afectadas
export const updateEmployees = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  // IFNULL es para validar si el valor es nulo y si es nulo no lo actualiza, lo deja con el valor anterior
  const [result] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?",
    [name, salary, id]
  );
  // validamos si hay filas afectadas y si no hay devolvemos un error
  if (result.affectedRows <= 0) {
    return res.status(404).json({ status: 404, message: "Employee not found" });
  }
  // buscamos el empleado que actualizamos
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  // enviamos el empleado actualizado
  res.json(rows[0]);
};
