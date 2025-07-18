const express = require('express');
const app = express();
const PORT = 3000;

// Permitir recibir JSON
app.use(express.json());

// Ruta GET (por ejemplo: http://localhost:3000/hola)
app.get('/hola', (req, res) => {
  res.json({ mensaje: 'Hola desde la API local' });
});

// Ruta POST
app.post('/datos', (req, res) => {
  console.log(req.body); // muestra el cuerpo de la solicitud
  res.json({ recibido: true, datos: req.body });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
