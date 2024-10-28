// Importar el módulo express
const express = require('express');

// Crear una instancia de la aplicación
const app = express();

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static('public'));

// Definir la ruta principal
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html'); // Asegúrate de que la ruta sea correcta
});

// Iniciar el servidor en el puerto 3000
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
