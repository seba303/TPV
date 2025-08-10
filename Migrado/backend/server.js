const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Inicializar base de datos
const db = new sqlite3.Database('./tpv.db');

// Crear tabla de productos si no existe
db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    talle TEXT NOT NULL,
    precio REAL NOT NULL,
    stock INTEGER NOT NULL
)`);

// Endpoint para obtener productos
app.get('/api/productos', (req, res) => {
    db.all('SELECT * FROM productos', [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// Obtener producto por ID
app.get('/api/productos/:id', (req, res) => {
    db.get('SELECT * FROM productos WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!row) return res.status(404).json({ error: 'Producto no encontrado' });
        res.json(row);
    });
});

// Endpoint para agregar producto
app.post('/api/productos', (req, res) => {
    const { nombre, talle, precio, stock } = req.body;
    if (!nombre || !talle || precio == null || stock == null) {
        return res.status(400).json({ error: 'Datos incompletos' });
    }
    db.run(
        'INSERT INTO productos (nombre, talle, precio, stock) VALUES (?, ?, ?, ?)',
        [nombre, talle, precio, stock],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ id: this.lastID });
        }
    );
});

// Editar producto
app.put('/api/productos/:id', (req, res) => {
    const { nombre, talle, precio, stock } = req.body;
    db.run(
        'UPDATE productos SET nombre = ?, talle = ?, precio = ?, stock = ? WHERE id = ?',
        [nombre, talle, precio, stock, req.params.id],
        function(err) {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ updated: this.changes });
        }
    );
});

// Eliminar producto
app.delete('/api/productos/:id', (req, res) => {
    db.run('DELETE FROM productos WHERE id = ?', [req.params.id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: this.changes });
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
