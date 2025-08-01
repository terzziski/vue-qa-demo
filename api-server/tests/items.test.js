const request = require('supertest');
const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routes/login');
const itemRoutes = require('../routes/items');

let app;

beforeEach(() => {
  app = express();
  app.use(cors());
  app.use(express.json());
  app.use('/login', loginRoutes);
  app.use('/items', itemRoutes);
});

describe('API Tests', () => {
  test('POST /login - success', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'admin', password: '1234' });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Login successful');
  });

  test('POST /login - invalid credentials', async () => {
    const res = await request(app)
      .post('/login')
      .send({ username: 'user', password: 'wrong' });
    expect(res.statusCode).toBe(401);
    expect(res.body.error).toBe('Invalid credentials');
  });

  test('POST /items and GET /items', async () => {
    await request(app).post('/items').send({ name: 'Test Item' });
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
    expect(res.body[0]).toHaveProperty('name', 'Test Item');
  });

  test('PUT /items/:id - update item', async () => {
    const add = await request(app).post('/items').send({ name: 'Old Item' });
    const updated = await request(app).put(`/items/${add.body.id}`).send({ name: 'Updated Item' });
    expect(updated.statusCode).toBe(200);
    expect(updated.body.name).toBe('Updated Item');
  });

  test('DELETE /items/:id - delete item', async () => {
    const add = await request(app).post('/items').send({ name: 'To Delete' });
    const deleted = await request(app).delete(`/items/${add.body.id}`);
    expect(deleted.statusCode).toBe(204);
  });
});
