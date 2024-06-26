// import mysql from 'mysql2';
const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'nodejs_basic',
  waitForConnections: true,
  connectionLimit: 10,
});
pool.getConnection((err, connection) => {
  if (err) {
      if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.');
      }
      if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.');
      }
      if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.');
      }
  }
  
  if (connection) connection.release();
  
  return;
  }
);


// async function queryDatabase() {
//   try {
//     // Get a connection from the pool
//     const connection = await pool.getConnection();

//     // Execute the query
//     const [rows, fields] = await connection.query('SELECT * FROM user');

//     // Release the connection
//     connection.release();

//     // Output the results
//     console.log(rows); // Array of rows
//     console.log(fields); // Extra meta data about results, if available

//   } catch (error) {
//     console.error('Error executing query:', error);
//   }
// }

// // Call the function to execute the query
// queryDatabase();
export default pool;