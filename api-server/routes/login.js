const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === '1234') {
    return res.status(200).json({ message: 'Login successful' });
  }
  return res.status(401).json({ error: 'Invalid credentials' });
});

module.exports = router;
