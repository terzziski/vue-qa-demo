const express = require('express');
const router = express.Router();

let items = [];

router.get('/', (req, res) => res.json(items));

router.post('/', (req, res) => {
  const { name } = req.body;
  const newItem = { id: Date.now().toString(), name };
  items.push(newItem);
  res.status(201).json(newItem);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const item = items.find(i => i.id === id);
  if (!item) return res.status(404).json({ error: 'Item not found' });
  item.name = name;
  res.json(item);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const index = items.findIndex(i => i.id === id);
  if (index === -1) return res.status(404).json({ error: 'Item not found' });
  items.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
