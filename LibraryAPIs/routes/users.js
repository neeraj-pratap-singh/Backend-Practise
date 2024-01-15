// Import users data
const users = require('../data/users');
const books = require('../data/books');

// Add the routes for users here

// Add a New User
router.post('/', (req, res) => {
  const { name, borrowedBooks } = req.body;
  const newUser = { id: users.length + 1, name, borrowedBooks };
  users.push(newUser);
  res.status(201).json({ message: 'User added successfully', users });
});

// Get User by ID
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

// Return Book by User
router.put('/:id/return', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');

  const { bookId } = req.body;
  const bookIndex = user.borrowedBooks.indexOf(bookId);
  if (bookIndex === -1) return res.status(404).send('Book not borrowed by this user');

  user.borrowedBooks.splice(bookIndex, 1);
  res.json({ message: 'Book returned successfully', users, books });
});

module.exports = router;
