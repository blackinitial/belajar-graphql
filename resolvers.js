const BookModel = require('./models/Book');

module.exports = {
  Query: {
    getAllBooks: async () => await BookModel.find({})
  }
}