// createConnecttion mantiene un solo hilo de conexión a la base de datos
// createPool un conjunto de conexiones a la base de datos
// mysql2/promise se utiliza para trabajar con promesas
import { createPool } from "mysql2/promise";

import { DB_DATABASE, DB_PASSWORD, DB_PORT, DB_USER, HOST } from "./config.js";

export const pool = createPool({
  host: HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
