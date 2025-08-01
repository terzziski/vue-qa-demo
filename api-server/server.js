const express = require('express');
const cors = require('cors');

const loginRoutes = require('./routes/login');
const itemRoutes = require('./routes/items');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/items', itemRoutes);

app.listen(3000, () => console.log('API server running on http://localhost:3000'));
