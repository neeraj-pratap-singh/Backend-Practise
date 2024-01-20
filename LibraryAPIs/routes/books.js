const express = require('express');
const router = express.Router(); // Create a new router instance

// Import books data
const books = require('../data/books');

// Get All Books
router.get('/', (req, res) => {
  res.json(books);
});

// Get Book by ID
router.get('/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).send('Book not found');
  res.json(book);
});

// Add a New Book
router.post('/', (req, res) => {
  const { title, author, year } = req.body;
  const newBook = { id: books.length + 1, title, author, year };
  books.push(newBook);
  res.status(201).json({ message: 'Book added successfully', books });
});

// Update Book by ID
router.put('/:id', (req, res) => {
    const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
    if (bookIndex === -1) return res.status(404).send('Book not found');
  
    const { title, author, year } = req.body;
    
    // Update the book using spread operator
    books[bookIndex] = {
      ...books[bookIndex],
      title: title || books[bookIndex].title, // Fallback to current value if not provided
      author: author || books[bookIndex].author,
      year: year || books[bookIndex].year
    };
  
    res.json({ message: 'Book updated successfully', books });
  });  

// Delete Book by ID
router.delete('/:id', (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) return res.status(404).send('Book not found');

  books.splice(bookIndex, 1);
  res.json({ message: 'Book deleted successfully', books });
});

module.exports = router;
