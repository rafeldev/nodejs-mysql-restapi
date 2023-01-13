import { pool } from ".././db.js";

export const ping = async (req, res) => {
  //esto es asincrono por eso lo llamamos con async/await
  const [result] = await pool.query('SELECT "Pong" AS result');
  res.json(result[0]);
};
