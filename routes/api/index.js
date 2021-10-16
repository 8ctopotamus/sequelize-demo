const router = require('express').Router()
const bookRoutes = require('./books')

// matches /api/books
router.use('/books', bookRoutes)

module.exports = router