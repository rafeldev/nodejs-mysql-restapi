// createConnecttion mantiene un solo hilo de conexión a la base de datos
// createPool un conjunto de conexiones a la base de datos
// mysql2/promise se utiliza para trabajar con promesas
import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "admin123",
  port: 3306,
  database: "companydb",
});
