// Importar módulo mysql
const mysql = require('mysql');

// Crear conexión
const conexion = mysql.createConnection({
    host: 'localhost',       // o la IP de tu servidor
    user: 'root',            // tu usuario MySQL
    password: '',            // tu contraseña
    database: 'ejemplo_db'   // base de datos a usar
});

// Conectar a la base de datos
conexion.connect((err) => {
    if (err) {
        console.error('Error al conectar a la base de datos: ', err);
        return;
    }
    console.log('Conexión exitosa a MySQL!');
});

// Realizar consulta
conexion.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
        console.error('Error al ejecutar la consulta: ', err);
        return;
    }
    console.log('Resultados de la consulta:');
    console.table(results);
});

// Cerrar conexión
conexion.end((err) => {
    if (err) {
        console.error('Error al cerrar la conexión: ', err);
        return;
    }
    console.log('Conexión cerrada correctamente.');
});
