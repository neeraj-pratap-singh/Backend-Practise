// Import authors data
const authors = require('../data/authors');

// Get All Authors
router.get('/', (req, res) => {
  res.json(authors);
});

// Get Author by ID
router.get('/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  if (!author) return res.status(404).send('Author not found');
  res.json(author);
});

module.exports = router;
