const router = require('express').Router()
const Book = require('../../models/Book')


// matches /api/books
router.post('/', async (req, res) => {
  try {
    await Book.create(req.body)
    const books = await Book.findAll()
    res.json(books)
  } catch(err) {
    res.status(500).json(err)
  }
})

// matches /api/books
router.get('/', async (req, res) => {
  try {
    const books = await Book.findAll()
    res.json(books)
  } catch(err) {
    res.status(500).json(err)
  }
})

// find one
// matches /api/books/:id
router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const book = await Book.findByPk(id)
    res.json(book)
  } catch(err) {
    res.status(500).json(err)
  }
})

// update
router.put('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const body = req.body // {title: '', author: "josh"}
    const updatedBook = await Book.update(body, { where: { id } })
    res.json(updatedBook)
  } catch(err) {
    res.status(500).json(err)
  }
})

// delete
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id
    const deletedBook = await Book.destroy({ where: { id } })
    res.json(deletedBook)
  } catch(err) {
    res.status(500).json(err)
  }
})

// seed
router.post('/seed', async (req, res) => {
  try {
    await Book.bulkCreate([
      {
        title: 'Make It Stick: The Science of Successful Learning',
        author: 'Peter Brown',
        isbn: '978-0674729018',
        pages: 336,
        edition: 1,
        is_paperback: false
      },
      {
        title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
        author: 'Kenneth Rubin',
        isbn: '978-0137043293',
        pages: 500,
        edition: 1,
        is_paperback: true
      },
      {
        title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
        author: 'Robin DiAngelo',
        isbn: '978-0807047415',
        pages: 192,
        edition: 2,
        is_paperback: true
      },
      {
        title: 'The Pragmatic Programmer: Your Journey To Mastery',
        author: 'David Thomas',
        isbn: '978-0135957059',
        pages: 352,
        edition: 2,
        is_paperback: false
      },
      {
        title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
        author: 'Donald Knuth',
        isbn: '978-0201896831',
        pages: 672,
        edition: 3,
        is_paperback: false
      },
      {
        title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
        author: 'Safiya Umoja Noble',
        isbn: '978-1479837243',
        pages: 256,
        edition: 1,
        is_paperback: true
      }
    ])
    res.send('Database seeded!')
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router