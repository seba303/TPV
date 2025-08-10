const request = require('supertest');
const express = require('express');
const app = require('../server'); // Asegúrate que server.js exporta 'app'

describe('API Productos', () => {
    test('GET /api/productos debe devolver un array', async () => {
        const res = await request(app).get('/api/productos');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });

    test('POST /api/productos debe crear un producto', async () => {
        const res = await request(app)
            .post('/api/productos')
            .send({ nombre: 'Test', precio: 10, stock: 5 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id');
    });
});

describe('API Usuarios', () => {
    test('GET /api/usuarios debe devolver un array', async () => {
        const res = await request(app).get('/api/usuarios');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});
