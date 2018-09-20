const express = require('express');
const router = express.Router();
const data = require('../data.json').projects;

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const technologies = data[id].technologies;
  res.render('project', {data, id, technologies});
});

module.exports = router;
