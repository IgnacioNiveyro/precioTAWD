const express = require('express');
const app = express();

// Definimos el puerto
const PORT = process.env.PORT || 3000;

// Lista de monedas
const monedas = ['ARS', 'USD', 'EUR', 'JPY', 'GBP', 'AUD', 'CAD', 'CHF', 'CNY', 'NZD', 'BRL', 'MXN', 'INR', 'RUB', 'KRW'];

// Ruta raíz que devuelve un JSON con un precio y una moneda aleatoria
app.get('/', (req, res) => {
    const precioRandom = Math.floor(Math.random() * 1000) + 1; // Genera un número aleatorio entre 1 y 1000
    const monedaRandom = monedas[Math.floor(Math.random() * monedas.length)]; // Selecciona una moneda aleatoria de la lista
    
    res.json({
        precio: precioRandom,
        moneda: monedaRandom
    });
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
