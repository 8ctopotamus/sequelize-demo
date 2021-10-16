const router = require('express').Router()
const Book = require('../../models/Book')

// matches /api/books
router.post('/', (req, res) => {
  Book.create(req.body)
    .then(newBook => res.json(newBook))
    .catch(err => res.status(500).json(err))
})

// matches /api/books
router.get('/', (req, res) => {
  Book.findAll()
    .then(books => res.json(books))
    .catch(err => res.status(500).json(err))
})

module.exports = router